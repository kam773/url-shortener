import * as React from "react";
import Form from "../Form/Form";
import Input from "../Input/Input";
import Button from "../Button/Button";
import Card from "../Card/Card";
import ListItem from "../ListItem/ListItem";
import IconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import IconDetailedRecords from "../../assets/icon-detailed-records.svg";
import IconFullyCustomizable from "../../assets/icon-fully-customizable.svg";
import LocalStorageService from "../../services/localStorageService";
import { getUrl } from "../../services/shortenerService";
import { isValidUrl } from "../../utils/utils";
import { Short } from "../../types";
import styles from "./MainSection.module.css";

export interface MainSectionProps {}

const MainSection: React.FC<MainSectionProps> = () => {
  const [url, setUrl] = React.useState<string>("");
  const [error, setError] = React.useState<null | string>(null);
  const [shortenedLinks, setShortenedLinks] = React.useState<Array<Short>>([]);

  React.useEffect(() => {
    const links = LocalStorageService.getItem("links");
    setShortenedLinks(links);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isValidUrl(url)) {
      const {
        data: { result },
      } = await getUrl(url);
      console.log(result);
      const { short_link, original_link } = result;
      const updatedLinks = [
        ...shortenedLinks,
        { short_link, original_link, copied: false },
      ];
      LocalStorageService.setItem("links", JSON.stringify(updatedLinks));
      setShortenedLinks(updatedLinks);
      setUrl("");
    } else {
      setError("Please add a valid link");
    }
  };

  const onCopy = async (url: string) => {
    await navigator.clipboard.writeText(url);
    const shortlink = await navigator.clipboard.readText();
    const links = shortenedLinks.map((item) => {
      if (item.short_link === shortlink) item.copied = true;
      return item;
    });
    setShortenedLinks(links);
  };

  return (
    <main className={styles.main}>
      <section className={styles.sectionShort}>
        <div className={styles.formContainer}>
          <div className={styles.formBg}>
            <Form onSubmit={handleSubmit}>
              <Input
                name="input_short"
                type="text"
                handleChange={(e) => setUrl(e.target.value)}
                value={url}
                error={error}
                placeholder="Shorten a link here.."
                className={`${styles.inputShort} ${
                  error ? styles.error : null
                }`}
              />
              <Button className={styles.btnShort}>Shorten it!</Button>
            </Form>
          </div>
        </div>
      </section>
      <section className={styles.sectionInfo}>
        <div className={styles.wrapResult}>
          <div className={styles.results}>
            <ul className={styles.list}>
              {shortenedLinks &&
                shortenedLinks.map((item) => (
                  <ListItem
                    key={item.short_link}
                    data={item}
                    onClick={() => onCopy(item.short_link)}
                  />
                ))}
            </ul>
          </div>
        </div>

        <div className={styles.textContainer}>
          <h1 className={`${styles.headingPrimary} ${styles.dark}`}>
            Advanced Statistics
          </h1>
          <p className={styles.description}>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className={`${styles.cardsContainer}`}>
          <Card
            icon={IconBrandRecognition}
            title={"Brand Recognition"}
            body={
              "Boost your brand recognition with each click. Generic links don't mean a thing. branded links help instil confidence in your content."
            }
          />
          <Card
            icon={IconDetailedRecords}
            title={"Detailed Records"}
            body={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
            }
          />
          <Card
            icon={IconFullyCustomizable}
            title={"Fully Customizable"}
            body={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement"
            }
          />
        </div>
      </section>
      <section className={styles.getStarted}>
        <h1 className={`${styles.headingPrimary} ${styles.white}`}>
          Boost your links today
        </h1>
        <div className={styles.cta}>
          <Button className={styles.btnRound}>Get started</Button>
        </div>
      </section>
    </main>
  );
};

export default MainSection;
