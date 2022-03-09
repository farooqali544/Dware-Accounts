import React, { useState } from "react";

function TagsForm({ setAllTags, setAddTagClicked }) {
  const [inputText, setInputText] = useState("");
  const [tags, setTags] = useState([]);

  const onSubmit = (event) => {
    event.preventDefault();

    setAllTags((prevTags) => [...prevTags, ...tags]);
    setAddTagClicked(false);
  };

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

  return (
    <form
      onKeyDown={disallowEnter}
      id='form'
      onSubmit={onSubmit}
      className=' flex flex-col rounded-md border max-w-xl w-full shadow-elevated2 px-6 mobile:px-4 py-4 font-medium text-slate-800 dark:text-slate-100'
    >
      <div className='flex justify-between items-center'>
        <h1 className='text-xl font-bold'>Create Tags</h1>
        <span
          onClick={() => {
            setAddTagClicked(false);
          }}
          className='cursor-pointer'
        >
          ❌
        </span>
      </div>
      <span className=' mt-2 text-xs text-slate-900 font-medium'>Hit enter to add tag</span>
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

      <button type='submit' form='form' className='mt-3 py-2 px-8 rounded-md flex bg-[#3056D3] text-white font-semibold justify-center self-center'>
        Create
      </button>
    </form>
  );
}

export default TagsForm;
