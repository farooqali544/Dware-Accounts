import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { accountContent, accountSchema, accountsTypeList } from "../dummyData/accountContent";
import { proxiesList } from "../dummyData/proxyContent";
import { timeZoneData } from "../dummyData/timeZoneData";

function ProxyForm({setAddProxyClicked,}) {
  const [accountType, setAccountType] = useState(0);
  const [proxy, setProxy] = useState(0);
  const [timeZone, setTimeZone] = useState(0);

  //   Tags
  const [inputText, setInputText] = useState("");
  const [tags, setTags] = useState([]);



  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(accountSchema),
  });

  const onChangeHandle = (e) => {
    setInputText(e.target.value);
  };

  const onKeyDownHandle = (e) => {
    if (e.keyCode === 13 && e.target.value !== "") {
      let temp = tags;
      temp.push(inputText);
      setTags(temp);
      setInputText("");
    }
  };

  const deleteTag = (index) => {
    const temp = tags.filter((item, ind) => ind !== index);
    setTags(temp);
  };

  const disallowEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      return;
    }
  };
  
  const onSubmit = (data) => {
      console.log(data);
  };

  return (
    <form
      id='form'
      onKeyDown={disallowEnter}
      className='flex flex-1  max-w-md flex-col gap-2 px-6 py-4 rounded-md shadow-elevated2 font-medium text-sm text-slate-800 dark:text-slate-100'
      onSubmit={handleSubmit(onSubmit)}
    >

<div className="flex justify-between">
    <h1 className="text-xl font-bold">Add Proxy</h1>
    <span onClick={()=>{setAddProxyClicked(false)}} className="cursor-pointer">❌</span>
</div>


      <div>
        <label className='block mb-1' htmlFor='proxyName'>
          Proxy Name <span className='text-rose-500'>*</span> <span className='text-rose-500'>{errors.proxyName?.message}</span>
        </label>
        <input type='text' id='proxyName' className='form-input  w-full text-slate-600' {...register("proxyName")} />
      </div>

       {/* Drop Down Proxy */}
       <div>
        <label className='block  mb-1' htmlFor='proxy'>
          Proxy <span className='text-rose-500'>*</span>
        </label>
        <select
          name=''
          id='proxy'
          value={proxy}
          onChange={(e) => {
            setProxy(e.target.value);
          }}
          className='form-input w-full text-slate-600'
        >
          {proxiesList.map((item) => (
            <option hidden={item.id === 0} value={item.id}>
              {item.period}
            </option>
          ))}
        </select>
      </div>

      {/* UserName/Email */}
      <div>
        <label className='block mb-1' htmlFor='username'>
          Username/Email <span className='text-rose-500'>*</span> <span className='text-rose-500'>{errors.username?.message}</span>
        </label>
        <input type='text' id='username' className='form-input  w-full text-slate-600' {...register("username")} />
      </div>

      {/* Password */}
      <div>
        <label className='block mb-1' htmlFor='password'>
          Password <span className='text-rose-500'>*</span> <span className='text-rose-500'>{errors.password?.message}</span>
        </label>
        <input type='password' id='password' className='form-input  w-full text-slate-600' {...register("password")} />
      </div>

    


      {/* Tags  */}
      <div>
        <label className='block  mb-1' htmlFor='tags'>
          Tags <span className="text-xs">(hit enter to add tag)</span>
        </label>
        <div className='flex gap-3 px-2 border-2 items-center flex-wrap'>
          {tags.map((item, index) => (
            <div className='bg-primary flex gap-1 text-sm text-slate-100 px-2 py-[2px] items-center rounded-md '>
              <span>{item}</span>{" "}
              <span
                onClick={() => {
                  deleteTag(index);
                }}
                className='bg-slate-300 rounded-sm text-[10px] cursor-pointer'
              >
                ❌
              </span>
            </div>
          ))}

          <input
            type='text'
            placeholder='tag'
            value={inputText}
            id='tags'
            onChange={onChangeHandle}
            onKeyDown={onKeyDownHandle}
            className='flex-1 min-w-[50px] text-slate-800 text-sm p-1 '
          />
        </div>
      </div>

      <button type='submit' form='form' className='mt-2 py-2 px-8 rounded-md flex bg-[#3056D3] text-white font-semibold justify-center self-center'>
        Create
      </button>
    </form>
  );
}

export default ProxyForm;
