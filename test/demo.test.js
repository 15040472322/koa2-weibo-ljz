/**
 * @description test demo
 * @author ljz
 */



function sum(a, b) {
    return a + b
}

 test('10 + 20 应该 = 30', () => {
     const res = sum(10, 20)
     expect(res).toBe(30)   //期望()是()
 })