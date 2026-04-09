import { LanguageTypes, ModeTypes } from "../../../types/state.types";
import { WhatsMyIpDetailsResponseType } from "../../../utils/utils-for-users";
import styles from "./Ipaddress.module.css"

type IpaddressProps = {
  mode: ModeTypes;
  languageDetect: LanguageTypes;
  data: WhatsMyIpDetailsResponseType
}

export function Ipaddress({ mode, languageDetect, data}: IpaddressProps){
  return (
    <section className={styles.container}>
      <div>

      </div>
    </section>
  )
}