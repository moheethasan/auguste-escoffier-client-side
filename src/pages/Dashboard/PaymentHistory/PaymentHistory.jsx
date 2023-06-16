import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import Loader from "../../../components/Shared/Loader/Loader";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const PaymentHistory = () => {
  const [axiosSecure] = useAxiosSecure();
  const { user, loading } = useAuth();
  const { data: payments = [] } = useQuery(["payments", user], async () => {
    const res = await axiosSecure.get(`/payments?email=${user?.email}`);
    return res.data;
  });

  if (loading) {
    return <Loader></Loader>;
  }
  if (payments.length === 0) {
    return (
      <p className="text-error mt-10 text-lg font-semibold text-center">
        No payments found.
      </p>
    );
  }
  return (
    <div className="w-full mx-auto my-20">
      <h2 className="text-lg lg:text-2xl font-semibold uppercase mb-5 text-center">
        Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="table-sm md:table-md lg:table-lg w-full bg-lime-100 mt-5 rounded-lg">
          <thead>
            <tr>
              <th></th>
              <th className="text-start">Email</th>
              <th className="text-start">Class</th>
              <th className="text-start">Transaction ID</th>
              <th className="text-start">Date</th>
            </tr>
          </thead>
          <tbody>
            {payments?.map((payment, index) => (
              <tr key={payment._id}>
                <td>{index + 1}</td>
                <td className="font-semibold">{payment?.email}</td>
                <td className="font-semibold">
                  {payment?.class_name.length > 20
                    ? `${payment?.class_name.slice(0, 20)}...`
                    : payment?.class_name}
                </td>
                <td className="font-semibold">
                  <h3>{payment?.transactionId}</h3>
                </td>
                <td className="font-semibold">
                  {new Date(payment?.date).toLocaleDateString("en-GB")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
