import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useForm } from "react-hook-form";
import Loader from "../Shared/Loader/Loader";
import Swal from "sweetalert2";

const UpdateModal = ({ closeModal, isOpen, cls, refetch, loading }) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    fetch(`${import.meta.env.VITE_apiUrl}/classes/${cls._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          refetch();
          Swal.fire("Done!", `Class updated successfully`, "success");
          closeModal();
        }
      });
  };

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-2xl font-medium text-center leading-6 text-gray-900"
                >
                  You can update now!
                </Dialog.Title>
                <div className="mt-2">
                  <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="py-8 rounded-lg w-4/5 mx-auto"
                  >
                    <div className="w-full form-control">
                      <label className="label">
                        <span className="font-semibold label-text">
                          Class Name
                        </span>
                      </label>
                      <input
                        {...register("class_name")}
                        type="text"
                        defaultValue={cls?.class_name}
                        placeholder="Class name"
                        required
                        className="input input-bordered border-2"
                      />
                    </div>
                    <div className="w-full form-control">
                      <label className="label">
                        <span className="font-semibold label-text">Price</span>
                      </label>
                      <input
                        {...register("price")}
                        type="text"
                        pattern="^\d+(\.\d{1,2})?$"
                        defaultValue={cls?.price}
                        placeholder="0.00"
                        required
                        className="input input-bordered border-2"
                      />
                    </div>
                    <div className="w-full form-control">
                      <label className="label">
                        <span className="font-semibold label-text">
                          Available Seats
                        </span>
                      </label>
                      <input
                        {...register("available_seats")}
                        type="text"
                        pattern="^\d+$"
                        defaultValue={cls?.available_seats}
                        placeholder="0"
                        required
                        className="input input-bordered border-2"
                      />
                    </div>
                    <input
                      className="btn-primary mt-5 btn-block cursor-pointer"
                      type="submit"
                      value="Update"
                    />
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default UpdateModal;
