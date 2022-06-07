export const ModalLayout = () => {
    return (
        <div className={classes.modal}>
      <div className={classes.modal_container}>
        <div className={classes.modal_box}>
          <div className={classes.modal_form}>
            <div className={classes.modal_form_box}>{children} </div>
          </div>
        </div>
      </div>
    </div>
    )
}