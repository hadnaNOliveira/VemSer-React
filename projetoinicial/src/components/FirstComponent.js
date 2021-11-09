import SecondComponent from "./SecondComponent";
function FirstComponent({name}) {
    return(
        <>
            <h1>Meu Primeiro Componente</h1>
            <p>Testando outra coisa</p>
            <SecondComponent name={name}/>
        </>
    );
}

export default FirstComponent;
