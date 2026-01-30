const FindAlternateElement = () => {
    const actualArrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const alternateElement = [];

    const findAlternateElementFunction = (arr: any) => {
        for (let index = 0; index < arr.length; index += 2) {
            const element = arr[index];
            alternateElement.push(element)
        }
    }
    const finalOutput: any = findAlternateElementFunction(actualArrayList)

    return (
        <>
            <h1>This component is used for to find alternate element from an array or list.</h1>
            {finalOutput && finalOutput.map((element: any) => {
                return <h1>{element}</h1>
            })}
        </>
    )
}
export default FindAlternateElement;