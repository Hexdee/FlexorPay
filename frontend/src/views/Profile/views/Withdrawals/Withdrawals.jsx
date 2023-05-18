import Button from "@app/components/common/Button";
import { ArrrowLeft } from "@app/components/Icon/icons";
import Table from "@app/components/Table";
import { useAuthContext } from "@app/utils/contexts.js/AuthProvider";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const name = "Name";
const bank = "Bank";
const amount_received = "Amount";
const dateReceived = "Date";

const tableBody = [
  {
    name: "Stephen Curry",
    bank:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "Samuel JackSon Mackerel Moose",
    bank:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
  {
    name: "John Doe",
    bank:
      "lorem ipsum ipse dic donot homo sapiens erectus treblez uncourve",
    amount_received: 23,
  },
];
const tableHeader = [
  {
    name: "No",
    // fration: "oneth",
    width: " w-[64px]",
    className: "text-center",
  },
  { name: name, fraction: "threeth" },
  { name: bank, fraction: "seventh" },
  { name: amount_received, fraction: "threeth" },
  { name: dateReceived, fraction: "threeth" },
];

const Withdrawals = ({ isLoading }) => {
  const { user } = useAuthContext();
  const SINGLE_STRETCH = 10;
  const [isLoadingWithdrawals, setIsLoadingWithdrawals] = useState(true);
  const [withdrawals, setWithdrawals] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setWithdrawals(user?.withdrawalss?.slice(0, SINGLE_STRETCH));
    }
    return () => { };
  }, [isLoading, user?.withdrawals]);

  const handleShowMore = () => {
    setWithdrawals([
      ...withdrawals,
      ...user?.withdrawals?.slice(
        withdrawals.length,
        withdrawals.length + SINGLE_STRETCH
      ),
    ]);
  };
  return (
    <div>
      <Link to={"/profile"}>
        <Button variant="link" icon={ArrrowLeft} iconPosition="left">
          Back to Profile
        </Button>
      </Link>
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 className="text-gray-700 text-sm font-bold m-2">Make a new Withdrawal</h2>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Account id
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="id" type="text" placeholder="Enter account id:" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Bank name
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bank" type="text" placeholder="Enter bank name" />
        </div>
        <div class="mb-4">
          <label class="block text-gray-700 text-sm mb-2" for="username">
            Amount
          </label>
          <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="amount" type="number" placeholder="Enter amount" />
        </div>
        <div class="flex">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Withdraw
          </button>
        </div>
      </form>
      <p className="font-semibold text-h3 text-primary-01">
        Withdrawals History
      </p>

      <section className="md:w-[98%] mx-auto max-w-3xl md:overflow-x-scroll h-max">
        <div className="md:w-max md:max-w-3xl md:overflow-x-scroll h-max">
          <Table
            spinPosition={"start"}
            isLoading={isLoading}
            emptyTableText={
              !!withdrawals?.length && !isLoading
                ? null
                : "There are no withdrawals yet!"
            }
          >
            <Table.Header data={tableHeader} />
            <Table.Body>
              {withdrawals?.map((item, index) => (
                <>
                  <tr
                    className={classNames(" py-4 ", {
                      "bg-neutral-01 bg-opacity-60": index % 2,
                    })}
                  >
                    <td className="text-center">{index + 1}</td>
                    <td>{item?.payer}</td>
                    <td className="multiline-ellipsis hover:overflow-visible hover:block hover:cursor-pointer py-1">
                      {item?.description}
                    </td>
                    <td>{item?.amount}</td>
                    <td>{item?.createdAt}</td>
                  </tr>
                </>
              ))}
            </Table.Body>
          </Table>
          {/* <p></p> */}
        </div>
      </section>
      {Boolean(withdrawals?.length) &&
        withdrawals?.length < tableBody?.length &&
        !isLoadingWithdrawals && (
          <div className="flex justify-around">
            <Button variant="link" onClick={handleShowMore}>
              show more ...
            </Button>
          </div>
        )}
    </div>
  );
};

export default Withdrawals;
