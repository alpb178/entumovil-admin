/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import {
  EyeIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

export const TableActions = (props) => {
  const { onEdit, onDelete, onViewDetails, disabled } = props;
  return (
    <div className="z-40 flex items-center justify-end space-x-4">
      {onEdit ? (
        <button
          type="button"
          className="rounded-full p-1 hover:bg-blue-100 hover:text-blue-500"
          id="buttonEdit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <PencilSquareIcon className="h-6 w-6" />
        </button>
      ) : null}
      {onDelete && !disabled ? (
        <button
          type="button"
          className="rounded-full p-1 hover:bg-red-100 hover:text-red-500"
        
          id="buttonDelete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <TrashIcon className="h-6 w-6" />
        </button>
      ) : null}
      {onViewDetails ? (
        <button
          type="button"
          className="rounded-full p-1 hover:bg-red-100 hover:text-red-500"
          id="buttonDetails"
          onClick={(e) => {
            e.stopPropagation();
            onViewDetails;
          }}
        >
          <EyeIcon className="h-6 w-6" />
        </button>
      ) : null}
    </div>
  );
};
