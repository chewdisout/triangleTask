const triangle = require('../Classes/Triangle')

const Triangle = new triangle(2,2,2)

it("Should be Equilateral", () => {
    if(Triangle.triangleType() !== "Equilateral")
        throw new Error(`Expected - Equilateral instead of ${Triangle.triangleType()}`)
})