function CategeryChoose(props)
{
    let cat1=props.cat1;
    let cat2=props.cat2;
    let cat3=props.cat3;
    let id1=Number(props.cat1.id);
    let id2=Number(props.cat2.id);
    let id3=Number(props.cat3.id);
    console.log (id1);
    return (<div>
        <a href={"#/ques?cat="+id1+"&type=1"}> <p>Category 1 : {cat1.name} $2000</p> </a>
        <a href={"#/ques?cat="+id2+"&type=2"}> <p>Category 2 : {cat2.name} $4000</p> </a>
        <a href={"#/ques?cat="+id3+"&type=3"}> <p>Category 3 : {cat3.name} $8000</p> </a>
    </div>)
}
export default CategeryChoose;