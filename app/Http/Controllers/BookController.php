<?php

namespace App\Http\Controllers;
use App\Http\Requests\StoreBookRequest;
use App\Models\Book;
use App\Models\Author;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Inertia\Inertia;


class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $books = Book::latest()->get();
		//dd($authors);

        return Inertia::render('Book/Index', ['books' => $books]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
	   $autha = Author::select('id','name')->orderBy('id','desc')->get();
       return Inertia::render('Book/Create', ['autha' => $autha]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBookRequest $request)
	
    {
		//dd($request->all());
	
          Book::create(
          $request->validated()
        );

        return Redirect::route('books.index');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function show(Book $book)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function edit(Book $book)
    {
		return Inertia::render('Book/Edit', [
            'book' => [
			     'id'=> $book->id,
                'title' => $book->title,
                'description' => $book->description,
				'isbn' => $book->isbn,
             
            ]
        ]);
       
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function update(StoreBookRequest $request, Book $book)
    {
         $book->update($request->validated());

        return Redirect::route('books.index');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Book  $book
     * @return \Illuminate\Http\Response
     */
    public function destroy(Book $book)
    {
          $book->delete();

        return Redirect::route('books.index');
    }
}
