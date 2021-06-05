class Triangle{

    constructor(a, b, c, canvasBox) {
        this.aSide = parseInt(a)
        this.bSide = parseInt(b)
        this.cSide = parseInt(c)
        this.canvasBox = canvasBox
    }

    validate() {
        // Validate if input is empty
        if (
            this.aSide.length <= 0 ||
            this.aSide.length <= 0 ||
            this.aSide.length <= 0
        ) return false
        // Check if input is numeric(WHOLE NUMBERS ONLY)
        const reg = /^\d+$/;
        return !(
            !reg.test(this.aSide) ||
            !reg.test(this.bSide) ||
            !reg.test(this.cSide)
        );
    }

    triangleType(){
        if(
            this.aSide + this.bSide <= this.cSide ||
            this.aSide + this.cSide <= this.bSide ||
            this.bSide + this.cSide <= this.aSide
        ) return this.impossible()
        if(this.aSide === this.bSide && this.bSide === this.cSide) return this.equilateral()
        if(this.aSide !== this.bSide && this.aSide !== this.cSide && this.bSide !== this.cSide) return this.scalene()
        else return this.isosceles()
    }

    equilateral(){
        this.drawTriangle(100, 190, 200, 30, 300, 190)
        return "Equilateral"
    }

    isosceles(){
        this.drawTriangle(150, 190, 200, 30, 250, 190)
        return "Isosceles"
    }

    scalene(){
        this.drawTriangle(150, 190, 200, 30, 270, 150)
        return "Scalene"
    }

    impossible(){
        let ctx = this.canvasBox.getContext('2d')
        ctx.clearRect(0, 0, 400, 200)
        return "Impossible"
    }

    drawTriangle(firstX, firstY, secondX, secondY, thirdX, thirdY){
        let ctx = this.canvasBox.getContext('2d')
        ctx.beginPath();
        ctx.clearRect(0, 0, 400, 200)
        ctx.moveTo(firstX, firstY)
        ctx.lineTo(secondX, secondY)
        ctx.stroke()
        ctx.moveTo(secondX, secondY)
        ctx.lineTo(thirdX, thirdY)
        ctx.stroke()
        ctx.moveTo(firstX, firstY)
        ctx.lineTo(thirdX, thirdY)
        ctx.stroke()
    }
}
module.exports = Triangle
