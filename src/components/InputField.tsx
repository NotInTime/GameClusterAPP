import { FunctionComponent } from "react";
import { useGameContext } from "../contexts/games";

export interface IInputFieldProps {
  InputTitle: string;
  InputFieldID: string;
}

const InputField: FunctionComponent<IInputFieldProps> = (props) => {
  const handleOnChange = (e: any, id: string) => {
    console.log(id, e);
  };
  return (
    <div>
      <label
        htmlFor="Title"
        className="block text-sm font-medium text-gray-700"
      >
        {props.InputTitle}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={props.InputFieldID}
          type="text"
          name="Title"
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
          onChange={(e) => handleOnChange(e.target.value, props.InputFieldID)}
        />
      </div>
    </div>
  );
};

export default InputField;
