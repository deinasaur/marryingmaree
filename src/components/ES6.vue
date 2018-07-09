<template>
  <h1>CHECK CONSOLE</h1>

</template>

<script>
export default {
  name: 'es-six',
  data () {
    return {
      customer: { name: 'Dana', age: 22 },
      card: { amount: 7, product: 'soda', unitprice: 42 },
      evens: [2, 4, 6, 8],
      five: []
    }
  },
  methods: {
  },
  mounted: function () {
    // todo constants
    console.log('CONSTANTS')
    const number = 916
    console.log(number > 10) // === true

    // todo scoping
    console.log('SCOPING: Block Variables')
    let multiplytwo = []
    for (let i = 0; i <= 2; i++) {
      multiplytwo[i] = function () {
        return i * 2
      }
    }
    console.log(multiplytwo[0]()) // === 0
    console.log(multiplytwo[1]()) // === 2
    console.log(multiplytwo[2]()) // === 4

    // todo scoping
    // console.log('SCOPING: Block Functions')
    // {
    //   function foo () { return 1 }
    //   console.log(foo()) // === 1
    //   {
    //     function foo () { return 2 }
    //     console.log(foo()) // === 2
    //   }
    //   console.log(foo()) // === 1
    // }

    // todo arrow functions
    console.log('ARROW FUNCTIONS: Expression Bodies')
    const odds = this.evens.map(v => v + 1)
    const pairs = this.evens.map(v => ({ even: v, odd: v + 1 }))
    const nums = this.evens.map((v, i) => v + i)
    console.log(odds) // === 3, 5, 7, 9
    console.log(pairs) // === 2, 3; 4, 5; 6, 7; 8, 9
    console.log(nums)

    console.log('ARROW FUNCTIONS: Statement Bodies && Lexical this')
    nums.forEach(v => {
      if (v % 8 === 0) this.five.push(v)
    })
    console.log(this.five) // === 8

    // todo extended parameter handling
    console.log('EXTENDED PARAMETER HANDLING: Default Parameter Values')
    function f (x, y = 7, z = 42) {
      return x + y + z
    }
    console.log(f(1)) // === 50

    console.log('EXTENDED PARAMETER HANDLING: Rest Parameter')
    function f1 (x, y, ...a) {
      return (x + y) * a.length
    }
    console.log(f1(1, 2, 'hello', true, 7)) // === 9

    console.log('EXTENDED PARAMETER HANDLING: Spread Operator')
    let params = [ 'hello', true, 7 ]
    let other = [ 1, 2, ...params ]

    function f2 (x, y, ...a) {
      return (x + y) * a.length
    }
    console.log(other)
    console.log(f2(1, 2, ...params))

    let str = 'foo'
    let chars = [ ...str ]
    console.log(chars)

    // todo template literals
    console.log('TEMPLATE LITERALS: String Interpolation')
    let message = `Hi ${this.customer.name}!, Do you want to buy ${this.card.amount} ${this.card.product} for a total of ${this.card.amount * this.card.unitprice} bucks?`
    console.log(message)

    // todo extended literals
    console.log('EXTENDED LITERALS: Binary & Octal Literal')
    console.log(0b111110111) // === 503
    console.log(0o767) // === 503

    console.log('EXTENDED LITERALS: Unicode String & RegExp Literal')
    console.log('𠮷'.length) // === 2
    console.log('𠮷'.match(/./u)[0].length)
    console.log('\uD842\uDFB7')
    console.log('\u{20BB7}')
    console.log('𠮷'.codePointAt(0))
    for (let codepoint of '𠮷') console.log(codepoint)
  }
}
</script>

<style scoped>

</style>
