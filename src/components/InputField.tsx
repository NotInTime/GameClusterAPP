import { FunctionComponent } from 'react';

export interface IInputFieldProps {
    InputTitle: String;
}

const InputField: FunctionComponent<IInputFieldProps> = (props) => {
    return (
        <div>
            <label htmlFor="Title" className="block text-sm font-medium text-gray-700">
                {props.InputTitle}
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <input
                    type="text"
                    name="Title"
                    className="focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                />
            </div>
        </div>
    );
};

export default InputField