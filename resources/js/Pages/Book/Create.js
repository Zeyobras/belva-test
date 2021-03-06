import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, useForm,usePage  } from "@inertiajs/inertia-react";


const Create = () => {
	const { autha } = usePage().props;
    const { data, setData, errors, book ,post} = useForm({
	title:autha.title || "",
	author_id:autha.author_id =1,
	description:autha.description || "",
	isbn:autha.isbn || ""
    });
	
	
	

    function handleSubmit(e) {
        e.preventDefault();
        post(route("books.store"));
    }


    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("authors.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                          Books
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> / </span>
                        Create
                    </h1>
                </div>
                <div className="max-w-6xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
					
					
			<div className="mb-4">
                                <label className="">Authors</label>
								<div className="select-container">
								  <select  id="numOfPieces">
								  <option>--Please select an author--</option> 
            {autha.map((data,key) => (
              <option key={data.id} value={data.id}
			
         
			  
			  >{data.name}</option>
            ))}
          </select>
		  </div>
					
					
					
                  
				
                            <div className="mb-4">
                                <label className="">Book Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Title"
                                    name="title"
                                    value={data.title}
                                    onChange={(e) =>
                                        setData("title", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.title}
                                </span>
                            </div>
							
							   <div className="mb-4">
                                <label className="">Description</label>
                                <textarea
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                ></textarea>
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
							
							   <div className="mb-4">
                                <label className="">Isbn</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="isbn"
                                    name="isbn"
                                    value={data.isbn}
                                    onChange={(e) =>
                                        setData("isbn", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.isbn}
                                </span>
                            </div>
                          
                        </div>
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="px-6 py-2 font-bold text-white bg-green-500 rounded"
                            >
                                Save
                            </button>
                        </div>
                    </form>
					
                </div>
            </div>
        </div>
    );
};

export default Create;