export function GEJTripletHeader({ gl, erl, js }: { gl: any, erl: any, js: any }) {
    return (<tr className="border-b-4 border-gray-600">
        <td className="bg-pink-900 border-r-2 border-gray-600 text-center align-middle">{gl}</td>
        <td className="bg-blue-900 border-r-2 border-gray-600 text-center align-middle">{erl}</td>
        <td className="bg-yellow-900 border-r-2 border-gray-600 text-center align-middle">{js}</td>
    </tr>)
}

export function GEJTriplet({ gl, erl, js }: { gl: any, erl: any, js: any }) {
    return (<tr className="border-b-2 border-gray-700">
        <td className="bg-pink-950 border-r-2 border-gray-700 text-center align-middle">{gl}</td>
        <td className="bg-blue-950 border-r-2 border-gray-700 text-center align-middle">{erl}</td>
        <td className="bg-yellow-950 border-r-2 border-gray-700 text-center align-middle">{js}</td>
    </tr>)
}
