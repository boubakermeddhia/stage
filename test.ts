//::::::::::interface:::::::::::::::::::
interface interfaceUser {
    name: string,
    age?: number,
    getMessage(): string
}

const user: interfaceUser = {
    name: "dhia",
    age: 20,
    getMessage() {
        return "hello" + name
    }
}
const user2: interfaceUser = {
    name: "jack",
    getMessage() {
        return "hello" + name
    }
}


//::::::::::union:::::::::::::::::::
interface UserInterface {
    name: string,
    surname: string
}
let username: string = "alex"
let pageName: string | number = "1"
let errorMessage: UserInterface | null = null
let someProp: string | number | null | undefined | string[] | object

//::::::::::alias:::::::::::::::::::
type ID = String
type PopularTag = String
type maybepopularTag = PopularTag | null

interface UserInterface {
    id: ID,
    name: string,
    surname: string
}

const popularTag: PopularTag[] = ["dragon", "cofee"]
const dragonTag: maybepopularTag = "dragon"

//::::::::::void & function:::::::::::::::::::

const doSomething = (): void => {
    console.log('do something')
}
// vois is as set of undefind or a
let foo: void = undefined

//::::::::::any:::::::::::::::::::

const dosomething = (): void => {
    console.log('do something')
}
// vois is as set of undefind or a
let fo: any = undefined

//::::::::::never:::::::::::::::::::

const something = (): never => {
    throw 'never'
}
//never return thing

let vAny: any = 10
let vUnkonwn: unknown = 10
let s1: string = vAny
let s2: string = vUnkonwn as string
let pageNumber: string = "1"
let numeric: number = pageNumber as unknown as number

//::::::::::ts with dom:::::::::::::::::::

const someElement = document.querySelector('.foo') as HTMLInputElement

someElement.addEventListener('blur', (event) => {
    const target = event.target as HTMLInputElement
    console.log(target.value)
})

//::::::::::ts classes:::::::::::::::::::
interface Userclass {
    getfullname(): string
}
class User implements Userclass {
    protected firstName: string
    private lastName: string
    public age: number
    readonly unchangableage: number
    static readonly maxAge = 50
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.unchangableage = age
    }
    changeUnchangebleName(): void {
        // this.unchangableage=2
    }
    getfullname(): string {
        return this.firstName + " " + this.lastName
    }
}

class Admins extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }
    getEditor(): string {
        return this.editor
    }
}

const userr = new User("dhia", "bouab", 2)
const admin = new Admins("foo", "bar", 2)

console.log(userr.age)
console.log(User.maxAge)
console.log(admin.age)
console.log(Admins.maxAge)

//::::::::::generic interface:::::::::::::::::::

// const updtaedArray=any<string>((el:string)=>el.contains('foo'),['baz','foo','bar'])

const addId = <T extends object>(obj: T) => {
    let id = Math.random().toString(16)
    return {
        ...obj,
        id
    }
}
interface addid<T, V> {
    name: string
    data: T
    meta: V
}
const userrr: addid<{ meta: string }, string> = {
    name: "jack",
    data: {
        meta: "foo"
    },
    meta: 'bar'
}
const user3: addid<string[], string> = {
    name: "khon",
    data: ["foo", "hdh", "efj"],
    meta: "2"
}

const result = addId(userrr)
// generic allow us more data type <T>


//::::::::::enum:::::::::::::::::::

// const statuses={
//     done:0,
//     notstrated:1,
//     inprogress:2
// }

enum Status {
    notstrated,
    inprogress,
    done
}
// Status.inprogress =1

let notStarted: Status = Status.notstrated

notStarted = Status.done