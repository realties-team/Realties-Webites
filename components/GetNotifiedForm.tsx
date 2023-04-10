import { useForm } from "react-hook-form";

useForm;

type Props = {};

const GetNotifiedForm = (props: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (e: any) => {
    // trigger() comes from useForm
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <div className="flex flex-col md:flex-row gap-5 md:gap-10 px-2 py-10   ">
        {/* Left */}
        <div className="flex flex-col w-full ">
          <div className="  flex flex-col space-y-1 ">
            <label
              htmlFor="name"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Name
            </label>
            <input
              className=" border border-white rounded-md outline-none bg-colBlue04 py-1 text-white "
              type="text"
              //   placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-white">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1 n mt-3">
            <label
              htmlFor="email"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Email
            </label>
            <input
              className=" text-white border border-white rounded-md outline-none bg-colBlue04 py-1 "
              type="email"
              //   placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="mt-1 text-white">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
          </div>
        </div>

        {/* Right */}

        <div className="flex flex-col w-full">
          <div className="flex flex-col space-y-1 ">
            <label
              htmlFor="address"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Address
            </label>
            <input
              className=" text-white border border-white rounded-md outline-none bg-colBlue04 py-1 "
              type="text"
              //   placeholder="ADDRESS"
              {...register("address", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-white">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
          </div>

          <div className="flex flex-col space-y-1 mt-3 ">
            <label
              htmlFor="phoneNumber"
              className="text-colGray05 font-urbanist font-semibold  "
            >
              Phone Number
            </label>
            <input
              className="text-white border border-white rounded-md outline-none bg-colBlue04 py-1 "
              type="number"
              //   placeholder="PHONE NUMBER"
              {...register("phoneNumber", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className="mt-1 text-white">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
          </div>

          <button className="rounded bg-white mt-10 md:mt-5 w-full md:w-4/5  md:ml-10 py-2 text-colBlue04 font-urbanist font-semibold">
            Get early access
          </button>
        </div>
      </div>
    </form>
  );
};

export default GetNotifiedForm;
