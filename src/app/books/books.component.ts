import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksService} from "./books.service";
import {Book} from "./Book";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit, OnDestroy {

    editPopUp: boolean;
    deletePopUp: boolean;
    books: Book [] = [];

    thePageNumber: number= 1;
    thePageSize: number = 6;
    theTotalElements: number = 0;

    selectedBook: Book;

    editBookForm: FormGroup;

    private getBooksSubscription: Subscription;


  constructor(private bookService: BooksService, private formBuilder: FormBuilder) { }


  ngOnInit(): void {
      this.getBooks();
      this.buildForm();


  }

    buildForm(): void {
        this.editBookForm = this.formBuilder.group({
            title: [""],
            author: [""],
            genre: [""],
            height: [""],
            publisher:[""]

        });
    }


    getBooks(){
    this.getBooksSubscription =  this.bookService.getAllBooks(this.thePageNumber,this.thePageSize).subscribe(
          (data:any) => {
              this.books = data.data.books.content,
                  this.thePageNumber = data.data.books.number  ,
                  this.thePageSize = data.data.books.size,
                  this.theTotalElements = data.data.books.totalElements;

              console.log(this.thePageNumber,this.thePageSize, this.theTotalElements);



          },
          (error) => {
              console.error('Error occurred while fetching data from the backend:', error.message);
          }
      );
  }



    showEditFormDialog(book: Book) {
        this.selectedBook = book;
        this.editPopUp = true;
    }

    showDeletionDialog(book: Book) {
        this.deletePopUp = true;
        this.selectedBook = book;


    }



    deleteBook() {

        const bookId = this.selectedBook.id;

       this.bookService.deleteBook(bookId).subscribe(
            () => {

               this.getBooks();
               this.deletePopUp = false;

            },
            (error) => {
                console.error('Error occurred while fetching data from the backend:', error.message);
            }
        );




    }

    onSubmit() {



    }

    editBook() {
        const bookId = this.selectedBook.id;

        const editedBook: Book = this.editBookForm.value;



         this.bookService.editBook(editedBook, bookId).subscribe(
            () => {
                this.getBooks();
                this.editPopUp = false;

            },

            (error) =>{
                console.log("error editing");
            }
        );
    }

    ngOnDestroy(): void {

      this.getBooksSubscription.unsubscribe();

    }
}
