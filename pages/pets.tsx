import Image from "next/image";
import img from "../public/1.jpg";

const PetsPage: React.FC = () => {
  return (
    <div>
      {/* placeholder=blur will not work on dynamic img
        And for dynamic search for blurDataURL
      */}
      <Image src={img} alt="pet" width="280" height="420" placeholder="blur" />

      {["2", "3", "4", "5"].map((path) => (
        <div key={path}>
          <Image src={`/${path}.jpg`} alt="pet" width="280" height="420" />
        </div>
      ))}
    </div>
  );
};

export default PetsPage;
