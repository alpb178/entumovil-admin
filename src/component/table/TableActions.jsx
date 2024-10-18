/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { dictNamePortal } from "@/lib/dict";
import { EyeIcon } from "@heroicons/react/24/outline";

export const TableActions = (props) => {
  const { onEdit, onDelete, onViewDetails, disabled } = props;
  return (
    <div className="z-40 flex items-center justify-center space-x-4">
      {onEdit ? (
        <button
          type="button"
          id="buttonEdit"
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
        >
          <img
            className="mt-[15px] h-5 w-auto"
            src="/public/img/icon_edit.svg"
            alt={dictNamePortal}
          />
        </button>
      ) : null}
      {onDelete && !disabled ? (
        <button
          type="button"
          id="buttonDelete"
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
        >
          <img
            className="mt-[15px] h-5 w-auto"
            src="/public/img/icon_delete.svg"
            alt={dictNamePortal}
          />
        </button>
      ) : null}
      {onViewDetails ? (
        <button
          type="button"
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
