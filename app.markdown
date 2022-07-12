---
layout: default
title: Run the test
nav_order: 2
---
<script type="text/javascript" src="{{site.baseurl}}/assets/js/vue/vue.min.js"></script>
<script type="text/javascript" src="{{site.baseurl}}/assets/js/lib/statistics-distributions.js"></script>

{% raw %}
<div class="content-wrapper" id="app-tester">
  <div class="container">
    <div class="row">
      <div class="col-md-offset-3 col-md-6">
        <form>
          <div v-for="(item, index) in input.table">
            <div v-for="(cell, cindex) in item">
              <div class="form-group col-xs-5">
                <label for="obs-{{ index }}{{ cindex }}">Conversions in {{ String.fromCharCode(65 + index) }}+{{ String.fromCharCode(65 + cindex) }}</label>
                <input v-model="item[cindex]" type="number" pattern="\d*" min="0" class="form-control" id="obs-{{ index }}{{ cindex }}" placeholder="Observed sample size"/> 
              </div>
            </div>
          </div>
        </form>
        <br />
      </div>
      <div class="col-md-offset-3 col-md-6">
        <div class="alert alert-warning" v-if="flag_interact">
          <em>Warning.</em> Possible interaction detected with <var>{{ display_p }}</var>.
          The observed sample sizes in each group does not match the expected proportion of the total sample size.
          <strong>Comparative statistics may be invalid as a result.</strong>
        </div>

        <div class="alert alert-success text-center" v-if="!flag_interact">
          No indication of interactions with <var>{{ display_p }}</var>.
        </div>
      </div>
    </div>
  </div>
</div>
{% endraw %}

<script type="text/javascript" src="{{site.baseurl}}/assets/js/xy.js"></script>
