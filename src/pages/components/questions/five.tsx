type closeWaitlistForm = () => void;
const five = ({
  closeWaitlistForm,
}: {
  closeWaitlistForm: closeWaitlistForm;
}) => {
  return (
    <div
      onClick={closeWaitlistForm}
      className="flex flex-col gap-5 text-sm lg:gap-5 font-light items-center text-center"
    >
      <div className="text-navy font-bold">
        👍 👍 👍 Congratulations, you've successfully joined the waitlist.
      </div>
      <div>
        We truly appreciate you taking the time to share your insights and are
        pleased to confirm that you are now on our waitlist!
      </div>
      <div>
        Over the coming weeks, we'll be rolling out more information and updates
        about the Impact Tool-Box. You'll be among the first to know.
      </div>
      <div>
         In the meantime, please stay tuned and keep an eye on your inbox for
        exclusive content and announcements.
      </div>
          <button
            onClick={closeWaitlistForm}
            className={`text-snow p-2  rounded-sm text-center font-bold w-full bg-navy mt-10`}
          >
            Close
          </button>
    </div>
  );
};

export default five;
