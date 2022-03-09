import React, { useState } from "react";
import SearchIcon from "../../../Assets/SVGS/SearchIcon";
import TagsForm from "./TagsForm";

import EditIcon from "../../../Assets/SVGS/EditIcon";
import DeleteIcon from "../../../Assets/SVGS/DeleteIcon";

function Tags() {
  const [addTagClicked, setAddTagClicked] = useState(false);
  const [allTags, setAllTags] = useState([]);
  const [editingTag, setEditingTag] = useState(null);
  const [editTagInput, setEditTagInput] = useState("");
  const [showAccounts, setShowAccounts] = useState(null);

  const onAddTag = () => {
    setAddTagClicked(true);
  };

  const deleteTag = (id) => {
    const temp = allTags.filter((tag, index) => index !== id);
    setAllTags(temp);
  };

  const editTag = (id) => {
    setAllTags(allTags.map((tag, index) => (index === editingTag ? editTagInput : tag)));
    setEditingTag(null);
  };

  const handleShowAccounts = (id) => {
    setShowAccounts(id);
  };

  return (
    <div className='flex flex-col h-full px-8 mobile:px-4 py-4 relative'>
      {/* Top */}
      <div className='flex flex-row  justify-end  items-center '>
        {/* Button */}
        <button
          onClick={onAddTag}
          className='text-lg font-bold w-[150px] px-4 py-2 bg-[#1E293B] dark:bg-slate-100  hover:bg-opacity-95 text-slate-100 dark:text-slate-900 rounded-md cursor-pointer'
        >
          Add Tag
        </button>
      </div>

      {/* Search Bar */}
      <div className='flex  flex-col gap-[2px] text-slate-900 font-medium dark:text-slate-100 items-start'>
        <label htmlFor='search'>Search Tags</label>
        <div className='flex items-center gap-4  bg-[#F1F3F4] w-full max-w-md min-w-60 px-3   focus-within:shadow-elevated2 focus-within:bg-white  rounded-md'>
          <SearchIcon />
          <input type={"text"} placeholder='Search tags' className='bg-transparent py-3 w-full dark:text-slate-900  ' />
        </div>
      </div>

      {/* Add Tags Form */}
      {addTagClicked && (
        <div className='flex mt-4 justify-center'>
          <TagsForm setAllTags={setAllTags} setAddTagClicked={setAddTagClicked} />
        </div>
      )}

      {/*Show Tags */}
      {!addTagClicked && (
        <>
          {allTags && allTags.length > 0 && (
            <div className='flex flex-col '>
              <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
                <div className='py-4 inline-block min-w-full sm:px-6 lg:px-8'>
                  <div className='overflow-hidden'>
                    <table className='min-w-full text-center'>
                      <thead className='border-b bg-gray-800'>
                        <tr className='border-b'>
                          <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                            Tag Name
                          </th>
                          <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                            Date Added
                          </th>
                          <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                            Accounts
                          </th>
                          <th scope='col' className='text-sm font-medium text-white px-6 py-4'>
                            Manage
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {allTags.map((item, index) => (
                          <tr className='bg-white border-b font-medium'>
                            {editingTag !== index ? (
                              <td className='px-6 py-4 whitespace-nowrap text-sm  text-slate-900'>{item}</td>
                            ) : (
                              <td className='px-6 py-4 whitespace-nowrap text-sm  text-slate-900'>
                                <input
                                  type='text'
                                  className='border border-slate-900 rounded-md  py-1 px-2'
                                  placeholder='Edit Tag'
                                  value={editTagInput}
                                  onChange={(e) => {
                                    setEditTagInput(e.target.value);
                                  }}
                                />
                              </td>
                            )}

                            <td className='text-sm text-slate-900  px-6 py-4 whitespace-nowrap'>22-22-2022</td>
                            <td className='text-sm text-slate-900  px-6 py-4 whitespace-nowrap'>
                              <button
                                onClick={() => {
                                  handleShowAccounts(index);
                                }}
                                className='p-2 bg-slate-800 text-white rounded-md hover:bg-slate-700 transition-colors'
                              >
                                Show Accounts
                              </button>
                            </td>
                            <td className='text-sm text-gray-900 px-6 py-4 whitespace-nowrap'>
                              <div className='flex gap-3 justify-center items-center'>
                                {editingTag !== index ? (
                                  <span
                                    onClick={() => {
                                      setEditingTag(index);
                                      setEditTagInput(item);
                                    }}
                                    className='bg-slate-900 p-1 rounded-md text-white cursor-pointer hover:bg-slate-700'
                                  >
                                    <EditIcon />
                                  </span>
                                ) : (
                                  // Tick
                                  <span
                                    onClick={() => {
                                      editTag(index);
                                    }}
                                    className='bg-slate-900 px-2 py-1 rounded-md text-white cursor-pointer hover:bg-slate-700'
                                  >
                                    ✔
                                  </span>
                                )}

                                {editingTag !== index ? (
                                  <span
                                    onClick={() => {
                                      deleteTag(index);
                                    }}
                                    className='bg-slate-900 p-1 rounded-md text-white cursor-pointer hover:bg-slate-700'
                                  >
                                    <DeleteIcon />
                                  </span>
                                ) : (
                                  <span
                                    onClick={() => {
                                      setEditingTag(null);
                                    }}
                                    className='bg-slate-900 p-1 rounded-md text-white cursor-pointer hover:bg-slate-700'
                                  >
                                    ❌
                                  </span>
                                )}
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {allTags.length === 0 && (
            <h1 className='text-center mt-6'>
              No Tags
              <span
                onClick={() => {
                  setAddTagClicked(true);
                }}
                className='underline cursor-pointer'
              >
                {" "}
                Click Here
              </span>{" "}
              to Add Tags
            </h1>
          )}
        </>
      )}

      {showAccounts !== null && (
        <div className='flex justify-center items-center bg-black bg-opacity-20 absolute top-0 left-0 w-full h-full'>
          <div className='flex-1 flex flex-col font-medium px-6 mobile:px-4 py-3  max-w-md max-h-[400px] overflow-auto shadow-elevated bg-white'>
            <div className='flex justify-between items-center'>
              <h1 className='text-center font-bold text-lg'>Accounts using this tag</h1>
              <span
                onClick={() => {
                  setShowAccounts(null);
                }}
                className='cursor-pointer'
              >
                ❌
              </span>
            </div>
            {[1, 2, 3, 4, 5].map((item) => (
              <p className='mt-2'>Account {item}</p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Tags;
