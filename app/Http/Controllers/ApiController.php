<?php

namespace App\Http\Controllers;
use App\Models\Book;
use App\Models\Author;
use Illuminate\Http\Request;

class ApiController extends Controller
{
	
	 public function getAuthors(){
        
        
        $authors= Author::all();
      
  
  
  
        return response()->json(['authors'=> $authors],200);
  
  
  
      }
	
	
    public function getAuthor(Request $request){
        //  $cardz= $request->all();
        $id=$request->id;
		
        
        $author= Author::where('id','=',$id)->select('id','name')->get();
      
  
  
  
        return response()->json(['author_info'=> $author],200);
  
  
  
      }
	  
	  	 public function getBooks(){
        
        
        $books= Book::all();
      
  
  
  
        return response()->json(['allbooks'=> $books],200);
  
  
  
      }
	  
	   public function getBook(Request $request){
        //  $cardz= $request->all();
        $id=$request->id;
		
        
        $author= Book::where('id','=',$id)->select('id','title','description','isbn')->get();
      
  
  
  
        return response()->json(['book_info'=> $author],200);
  
  
  
      }
	  
	  
	  public function createAuthor(Request $request){
      //  $cardz= $request->all();
      
        $author= Author::create([
            'name' =>$request->name,
            
        ]);



      return response()->json(['status'=>'author created successfully','info'=> $author],200);



    }
	
	
	
public function updateAuthor(Request $request){
        
        $id=$request->id;
        $name=$request->name;
        
        
          $card= Author::where('id','=',$id)->update(['name'=>$name]);
      
  
  
  
        return response()->json(['updated_author_info'=>['name'=>$name]],200);
  
  
  
      }
	  
	  public function updateBook(Request $request){
        
        $id=$request->id;
		$author_id=$request->author_id;
        $description=$request->description;
		$isbn=$request->isbn;
        
        
        $book= Book::where('id','=',$id)->update(['author_id'=>$author_id,'description'=>$description,'isbn'=>$isbn]);
      
  
  
  
        return response()->json(['updated_book_info'=>['author_id'=>$author_id,'description'=>$description,'isbn'=>$isbn]],200);
  
  
  
      }
	  
	  
	  
	  
}
