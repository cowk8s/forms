import Modal from "@/components/wrappers/Modal";

export function SurveyModal({

}) {
  const close = () => {
    setTimeout(() => {

    }, 1000);
  };

  return (
    <div id="fbjs" className="formbricks-form">
      <Modal
        onClose={close}>
        <div></div>
      </Modal>
    </div>
  )
}