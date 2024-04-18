class Encap
{
    #key = 6789;

    get getkey()
    {
        return this.#key;
    }

    set setkey(passkey)
    {
        this.#key = passkey;
    }
}
let ec = new Encap()
console.log(ec.getkey);

ec.setkey = 9898;
console.log(ec.getkey);