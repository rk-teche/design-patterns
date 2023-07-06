interface IResource
{
    displayTitle();
    fetchCoverImage();
    displayContent();
}

interface IArtist
{
    getBio();
    getArtistName();
    getCover();
}

interface IBook
{
    getContext();
    getBookTitle();
    getCoverImage();
}

class Artist implements IArtist
{
    getBio() {
        throw new Error("Method not implemented.");
    }
    getArtistName() {
        throw new Error("Method not implemented.");
    }
    getCover() {
        throw new Error("Method not implemented.");
    }
    
}

class Book implements IBook
{
    getContext() {
        throw new Error("Method not implemented.");
    }
    getBookTitle() {
        throw new Error("Method not implemented.");
    }
    getCoverImage() {
        throw new Error("Method not implemented.");
    }
    
}

class Resource implements IResource
{
    constructor(private item: IArtist | IBook)
    {

    }
    displayTitle() {
        throw new Error("Method not implemented.");
    }
    fetchCoverImage() {
        throw new Error("Method not implemented.");
    }

    displayContent() 
    {
        if(this.item instanceof Artist)
            this.item.getBio()
        else if(this.item instanceof Book)
            this.item.getContext()
    }
}

interface Iview
{
    title: string;
    image: string;
    cover: string;
}

abstract class View implements Iview {
    
    constructor(protected resource: IResource)
    {

    }
        
    private _title: string;

    public get title(): string {
        return this._title;
    }

    public set title(value: string) {
        this._title = value;
    }
    image: string;
    cover: string;
}

class LongView extends View
{
    image: string;
    cover: string;

    get title() : string
    {
        return this.resource.displayTitle()
    }
}

class ShortView extends View
{

    image: string;
    cover: string;

    get title() : string
    {
        return this.resource.displayTitle()
    }
}


const book = new Book()
const resource = new Resource(book)
const longView = new LongView(resource).title // return book title
