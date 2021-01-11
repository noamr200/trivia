function CategeryChoose(props)
{
    let cat1=props.cat1;
    let cat2=props.cat2;
    let cat3=props.cat3;

    return (<div>
        <p>Category 1 : {cat1.name}</p>
        <p>Category 2 : {cat2.name}</p>
        <p>Category 3 : {cat3.name}</p>
    </div>)
}
export default CategeryChoose;