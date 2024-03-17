import { P } from "../../global/Text";
import PersonData, { PersonDataProps } from "./PersonData";

interface SayingProps {
  personData: PersonDataProps;
  saying: string;
}

export default function Saying({ personData, saying }: Readonly<SayingProps>) {
  return (
    <div className="text-wrap">
      <PersonData
        name={personData.name}
        role={personData.role}
        image={personData.image}
      />
      <P>{saying}</P>
    </div>
  );
}
