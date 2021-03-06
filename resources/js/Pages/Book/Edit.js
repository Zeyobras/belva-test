import React from "react";
import { Inertia } from "@inertiajs/inertia";
import { InertiaLink, usePage, useForm } from "@inertiajs/inertia-react";

const Edit = () => {
    const { book } = usePage().props;
	console.log(book);

    const { data, setData, put, errors } = useForm({
		id: book.id || "",
        title: book.title || "",
		description: book.description || "",
		isbn: book.isbn || ""
    });

    function handleSubmit(e) {
        e.preventDefault();
        put(route("books.update", book.id));
    }
    function destroy() {
        if (confirm("Are you sure you want to delete this book?")) {
			
            Inertia.delete(route("books.destroy", book.id));
        }
    }

    return (
        <div className="mt-20">
            <div className="container flex flex-col justify-center mx-auto">
                <div>
                    <h1 className="mb-8 text-3xl font-bold">
                        <InertiaLink
                            href={route("books.index")}
                            className="text-indigo-600 hover:text-indigo-700"
                        >
                            Books
                        </InertiaLink>
                        <span className="font-medium text-indigo-600"> /</span>
                        Edit
                    </h1>
                </div>
                <div className="max-w-3xl p-8 bg-white rounded shadow">
                    <form name="createForm" onSubmit={handleSubmit}>
                        <div className="flex flex-col">
                            <div className="mb-4">
                                <label className="">Title</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Name"
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
                           <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="description"
                                    name="description"
                                    value={data.description}
                                    onChange={(e) =>
                                        setData("description", e.target.value)
                                    }
                                />
                                <span className="text-red-600">
                                    {errors.description}
                                </span>
                            </div>
							     <div className="mb-4">
                                <label className="">ISBN</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-2"
                                    label="Isbn"
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
                        <div className="flex justify-between">
                            <button
                                type="submit"
                                className="px-4 py-2 text-white bg-green-500 rounded"
                            >
                                Update
                            </button>
                            <button
                                onClick={destroy}
                                tabIndex="-1"
                                type="button"
                                className="px-4 py-2 text-white bg-red-500 rounded"
                            >
                                Delete
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Edit;
