import Button from "./Button";

function ConfirmRemove({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <div className="w-[30rem] flex flex-col gap-[1rem]">
      <p className="text-[1.35rem]">Remove {resourceName}</p>
      <p className="font-light">
        Are you sure you want to Remove {resourceName} from the group? This
        action cannot be undone.
      </p>

      <div className="flex justify-end gap-5">
        <Button
          textColor="#000"
          border={true}
          onClick={onCloseModal}
          disabled={disabled}
        >
          Cancel
        </Button>
        <Button bgColor="#f0483e" onClick={onConfirm} disabled={disabled}>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default ConfirmRemove;
