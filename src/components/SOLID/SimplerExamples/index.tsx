import { SimpleDIP } from "./SimpleDIP";
import { SimpleISP } from "./SimpleISP";
import { SimpleLSP } from "./SimpleLSP";

const Simple = () => {
  return (
    <div>
      <h2>Simple SOLID Examples</h2>
      <SimpleLSP />
      <SimpleISP />
      <SimpleDIP />
    </div>
  );
};
export default Simple;
