import React, { useState } from "react";
import { proxyContent, proxySchema } from "../dummyData/proxyContent";
import ProxyForm from "./ProxyForm";

function Proxy() {
  const [addProxyClicked, setAddProxyClicked] = useState(false);
  const [addedProxies, setAddedProxies] = useState([]);
  return (
    <div className='flex flex-col h-full px-8 mobile:px-4 py-4 relative'>
    <div className='flex flex-row  justify-end  items-center '>
      {/* Button */}
      <button
        onClick={() => {
          setAddProxyClicked(true);
        }}
        className='text-lg font-bold w-[150px] px-4 py-2 bg-[#1E293B] dark:bg-slate-100  hover:bg-opacity-95 text-slate-100 dark:text-slate-900 rounded-md cursor-pointer'
      >
        Add Account
      </button>
    </div>

    {addProxyClicked ? (
      <div className='flex mt-4 mb-4 justify-center'>
        <ProxyForm setAddProxyClicked={setAddProxyClicked} />
      </div>
    ) : (
      <>
        {addedProxies.length > 0 && (
          <div className='flex gap-20 flex-wrap mt-10 justify-start '>
            {[1, 2, 3, 4, 5, 6].map((account) => (
              <div
                // onClick={() => {
                //   setShowSuchAccounts(account);
                // }}
                className=' bg-slate-700 min-w-56 py-12 flex justify-center rounded-md text-3xl text-white font-bold cursor-pointer'
              >
                Facebook
              </div>
            ))}
          </div>
        )}

        {addedProxies.length === 0 && (
          <div>
            No Proxies Added,{" "}
            <span
              onClick={() => {
                setAddProxyClicked(true);
              }}
              className='underline cursor-pointer '
            >
              {" "}
              Click Here{" "}
            </span>{" "}
            to add proxy.
          </div>
        )}
      </>
    )}
  </div>
  );
}

export default Proxy;
