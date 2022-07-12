tester = new Vue({
  el: '#app-tester',
  data: {
    input: {
      table: [["",""], ["",""]],
    },
  },
  methods: {
    // Checking for interactions using chi-square
    chisquare: function(observed, expected) {
      // Check if input contains only numbers, and two matrices of equal dimensions
      if (observed.some((x) => (x.some((y) => !Number.isFinite(y))))) { return NaN; };
      if (expected.some((x) => (x.some((y) => !Number.isFinite(y))))) { return NaN; };
      if (expected.length !== observed.length) { return NaN; };
      if (expected.some((x,i) => x.length !== observed[i].length)) { return NaN; };

      // Degrees of freedom is variations - 1
      const df = observed.length - 1;

      // Chi-square is sum of squares of observed - expected over expected for each cell
      const chisq = expected.reduce((a, e, i) => a + e.reduce((b, f, j) => (b + ((observed[i][j] - f) ** 2) / f), 0), 0);

      return chisqrprob(df, chisq);
    },
  },
  computed: {
    expected_under_null: function() {
      let row_sums = this.table_int.map((v) => v.reduce((a, e) => a + e, 0));
      let col_sums = this.table_int.reduce((a, e) => e.map((v, i) => (a[i]||0) + v), []);

      let row_means = row_sums.map(v => v / this.table_int[0].length);
      let col_means = col_sums.map(v => v / this.table_int.length);
      let grand_mean = row_means.reduce((a,v) => a + v, 0) / row_means.length;

      // Expected for each cell is mean_row * mean_col / grand_mean
      let expected = row_means.map((r) => col_means.map((c) => r * c / grand_mean));

      return expected;
    },
    table_int: function() {
      return this.input.table.map((v) => (v.map((w) => parseInt(w))));
    },
    interact_p: function(v) {
      let p = this.chisquare(this.table_int, this.expected_under_null);
      return p;
    },
    flag_interact: function() {
      return this.interact_p < 0.05;
    },
    display_p: function() {
      const precision = 4;
      const smallest_display = 1/(10**precision);
      if (this.interact_p < smallest_display) {
        return "p < " + smallest_display;
      } else {
        return "p = " + this.interact_p.toFixed(4);
      }
    }
  }
});
