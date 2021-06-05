const Triangle = require('../src/Classes/Triangle')

let triangle

it("Should be Equilateral", () => {
    triangle = new Triangle(2,2,2)
    if(triangle.triangleType() !== "Equilateral")
        throw new Error(`Expected - Equilateral instead of ${Triangle.triangleType()}`)
})
it("Should be Scalene", () => {
    triangle = new Triangle(2,3,4)
    if(triangle.triangleType() !== "Scalene")
        throw new Error(`Expected - Scalene instead of ${Triangle.triangleType()}`)

})
it("Should be Isosceles", () => {
    triangle = new Triangle(2,2,3)
    if(triangle.triangleType() !== "Isosceles")
        throw new Error(`Expected - Isosceles instead of ${Triangle.triangleType()}`)

})
