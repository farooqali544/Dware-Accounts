import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import DropDownIcon from "../../Assets/SVGS/DropDownIcon";
import SearchIcon from "../../Assets/SVGS/SearchIcon";
import ModalBasic from "../Reusable/ModalBasic";
import { accountContent, accountSchema } from "./dummyData/accountContent";
import { proxyContent, proxySchema } from "./dummyData/proxyContent";
import { tagsContent, tagsSchema } from "./dummyData/tagsContent";

function AccountManager() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedAccountType, setSelectedAccountType] = useState("");
  const [showSuchAccounts, setShowSuchAccounts] = useState(); //Show Details of individual Account

  const dropDown = useRef(null);
  const navigate = useNavigate();

  const onAddNewAccount = (value) => {
    // setSelectedAccountType(value);
    navigate(`/${value}`);
  };

  useEffect(() => {
    const clickHandler = ({ target }) => {
      // if (!sidebar.current || !trigger.current) return;
      if (!dropDownOpen || dropDown.current.contains(target)) return;
      setDropDownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  const dropDownLinks = ["Account", "Proxy", "Tags"];

  const filteredModalContent = () => {
    const modalContent = [
      { name: "Account", formContent: accountContent, schema: accountSchema },
      { name: "Proxy", formContent: proxyContent, schema: proxySchema },
      { name: "Tags", formContent: tagsContent, schema: tagsSchema },
    ];
    const found = modalContent.find((content) => selectedAccountType === content.name);
    return found;
  };

  const storedAccounts = ["Facebook", "Instagram", "Linkedin", "Whatsapp", "Twitter"];

  return (
    <>
      <main className='flex flex-col shadow-2xl dark:bg-[#1D1E22] bg-white  px-8 mobile:px-4 py-3 flex-1 justify-start '>
        {selectedAccountType ? (
          <div className='flex justify-center flex-1 items-center'>
            <ModalBasic
              modalContent={filteredModalContent()}
              selectedAccountType={selectedAccountType}
              setSelectedAccountType={setSelectedAccountType}
            />
          </div>
        ) : (
          <>
            <div className='flex flex-row justify-end items-center'>
              <div
                ref={dropDown}
                onClick={() => setDropDownOpen(!dropDownOpen)}
                className={`${
                  dropDownOpen && "rounded-b-none"
                } relative text-lg font-bold flex gap-3 justify-center items-center w-[180px] px-4 py-2 bg-[#1E293B] dark:bg-slate-100  hover:bg-opacity-95 text-slate-100 dark:text-slate-900 rounded-md cursor-pointer `}
              >
                <span>Add New</span>
                {/* <DropDownIcon classes={"mb-[4px]"}/> */}

                <div
                  className={`${
                    dropDownOpen ? "h-auto opacity-100" : "h-0 opacity-0"
                  } overflow-hidden absolute bg-slate-50 top-full flex flex-col right-0 w-[180px]  border-b-slate-500 rounded-md rounded-t-none text-slate-900 transition-all duration-150`}
                >
                  {dropDownLinks.map((item) => (
                    <div
                      onClick={() => onAddNewAccount(item)}
                      className='flex text-lg font-normal justify-center py-3 border-[1px] border-b-slate-500 hover:bg-slate-300'
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* If clicked on accountType sucha as facebook to show more such accounts */}
            {showSuchAccounts ? (
              <div className='flex flex-col gap-3 mt-10 justify-center self-center py-4 px-5 mobile:px-4  max-w-xl w-full shadow-elevated2 rounded-[5px] dark:bg-slate-500 '>
                <h1 className='text-lg font-semibold text-center'>{showSuchAccounts} Accounts</h1>

                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                  <div
                    key={item}
                    className='flex flex-row justify-between items-center font-medium px-5 mobile:px-3 py-3 mobile:mx-0 mx-4 rounded-[5px] cursor-pointer   bg-slate-600 dark:bg-slate-800 hover:bg-slate-700 transition-all  text-white '
                  >
                    <span>Account Name</span>
                    <span>Date Added</span>
                  </div>
                ))}

                {/* Account 2 */}
              </div>
            ) : (
              <div className='flex gap-20 flex-wrap mt-10 justify-start '>
                {storedAccounts.map((account) => (
                  <div
                    onClick={() => {
                      setShowSuchAccounts(account);
                    }}
                    className=' bg-slate-700 min-w-56 py-12 flex justify-center rounded-md text-3xl text-white font-bold cursor-pointer'
                  >
                    {account}
                  </div>
                ))}
              </div>
            )}

          
          </>
        )}
      </main>
    </>
  );
}

export default AccountManager;
