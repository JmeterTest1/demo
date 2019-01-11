/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 2889.0, "minX": 0.0, "maxY": 5793.0, "series": [{"data": [[0.0, 2889.0], [0.1, 2889.0], [0.2, 2889.0], [0.3, 2889.0], [0.4, 2889.0], [0.5, 2889.0], [0.6, 2889.0], [0.7, 2889.0], [0.8, 2889.0], [0.9, 2889.0], [1.0, 3064.0], [1.1, 3064.0], [1.2, 3064.0], [1.3, 3064.0], [1.4, 3064.0], [1.5, 3064.0], [1.6, 3064.0], [1.7, 3064.0], [1.8, 3064.0], [1.9, 3064.0], [2.0, 3263.0], [2.1, 3263.0], [2.2, 3263.0], [2.3, 3263.0], [2.4, 3263.0], [2.5, 3263.0], [2.6, 3263.0], [2.7, 3263.0], [2.8, 3263.0], [2.9, 3263.0], [3.0, 3297.0], [3.1, 3297.0], [3.2, 3297.0], [3.3, 3297.0], [3.4, 3297.0], [3.5, 3297.0], [3.6, 3297.0], [3.7, 3297.0], [3.8, 3297.0], [3.9, 3297.0], [4.0, 3421.0], [4.1, 3421.0], [4.2, 3421.0], [4.3, 3421.0], [4.4, 3421.0], [4.5, 3421.0], [4.6, 3421.0], [4.7, 3421.0], [4.8, 3421.0], [4.9, 3421.0], [5.0, 3472.0], [5.1, 3472.0], [5.2, 3472.0], [5.3, 3472.0], [5.4, 3472.0], [5.5, 3472.0], [5.6, 3472.0], [5.7, 3472.0], [5.8, 3472.0], [5.9, 3472.0], [6.0, 3503.0], [6.1, 3503.0], [6.2, 3503.0], [6.3, 3503.0], [6.4, 3503.0], [6.5, 3503.0], [6.6, 3503.0], [6.7, 3503.0], [6.8, 3503.0], [6.9, 3503.0], [7.0, 3507.0], [7.1, 3507.0], [7.2, 3507.0], [7.3, 3507.0], [7.4, 3507.0], [7.5, 3507.0], [7.6, 3507.0], [7.7, 3507.0], [7.8, 3507.0], [7.9, 3507.0], [8.0, 3556.0], [8.1, 3556.0], [8.2, 3556.0], [8.3, 3556.0], [8.4, 3556.0], [8.5, 3556.0], [8.6, 3556.0], [8.7, 3556.0], [8.8, 3556.0], [8.9, 3556.0], [9.0, 3561.0], [9.1, 3561.0], [9.2, 3561.0], [9.3, 3561.0], [9.4, 3561.0], [9.5, 3561.0], [9.6, 3561.0], [9.7, 3561.0], [9.8, 3561.0], [9.9, 3561.0], [10.0, 3610.0], [10.1, 3610.0], [10.2, 3610.0], [10.3, 3610.0], [10.4, 3610.0], [10.5, 3610.0], [10.6, 3610.0], [10.7, 3610.0], [10.8, 3610.0], [10.9, 3610.0], [11.0, 3623.0], [11.1, 3623.0], [11.2, 3623.0], [11.3, 3623.0], [11.4, 3623.0], [11.5, 3623.0], [11.6, 3623.0], [11.7, 3623.0], [11.8, 3623.0], [11.9, 3623.0], [12.0, 3695.0], [12.1, 3695.0], [12.2, 3695.0], [12.3, 3695.0], [12.4, 3695.0], [12.5, 3695.0], [12.6, 3695.0], [12.7, 3695.0], [12.8, 3695.0], [12.9, 3695.0], [13.0, 3723.0], [13.1, 3723.0], [13.2, 3723.0], [13.3, 3723.0], [13.4, 3723.0], [13.5, 3723.0], [13.6, 3723.0], [13.7, 3723.0], [13.8, 3723.0], [13.9, 3723.0], [14.0, 3740.0], [14.1, 3740.0], [14.2, 3740.0], [14.3, 3740.0], [14.4, 3740.0], [14.5, 3740.0], [14.6, 3740.0], [14.7, 3740.0], [14.8, 3740.0], [14.9, 3740.0], [15.0, 3909.0], [15.1, 3909.0], [15.2, 3909.0], [15.3, 3909.0], [15.4, 3909.0], [15.5, 3909.0], [15.6, 3909.0], [15.7, 3909.0], [15.8, 3909.0], [15.9, 3909.0], [16.0, 3909.0], [16.1, 3909.0], [16.2, 3909.0], [16.3, 3909.0], [16.4, 3909.0], [16.5, 3909.0], [16.6, 3909.0], [16.7, 3909.0], [16.8, 3909.0], [16.9, 3909.0], [17.0, 3915.0], [17.1, 3915.0], [17.2, 3915.0], [17.3, 3915.0], [17.4, 3915.0], [17.5, 3915.0], [17.6, 3915.0], [17.7, 3915.0], [17.8, 3915.0], [17.9, 3915.0], [18.0, 3932.0], [18.1, 3932.0], [18.2, 3932.0], [18.3, 3932.0], [18.4, 3932.0], [18.5, 3932.0], [18.6, 3932.0], [18.7, 3932.0], [18.8, 3932.0], [18.9, 3932.0], [19.0, 3959.0], [19.1, 3959.0], [19.2, 3959.0], [19.3, 3959.0], [19.4, 3959.0], [19.5, 3959.0], [19.6, 3959.0], [19.7, 3959.0], [19.8, 3959.0], [19.9, 3959.0], [20.0, 3972.0], [20.1, 3972.0], [20.2, 3972.0], [20.3, 3972.0], [20.4, 3972.0], [20.5, 3972.0], [20.6, 3972.0], [20.7, 3972.0], [20.8, 3972.0], [20.9, 3972.0], [21.0, 4009.0], [21.1, 4009.0], [21.2, 4009.0], [21.3, 4009.0], [21.4, 4009.0], [21.5, 4009.0], [21.6, 4009.0], [21.7, 4009.0], [21.8, 4009.0], [21.9, 4009.0], [22.0, 4064.0], [22.1, 4064.0], [22.2, 4064.0], [22.3, 4064.0], [22.4, 4064.0], [22.5, 4064.0], [22.6, 4064.0], [22.7, 4064.0], [22.8, 4064.0], [22.9, 4064.0], [23.0, 4087.0], [23.1, 4087.0], [23.2, 4087.0], [23.3, 4087.0], [23.4, 4087.0], [23.5, 4087.0], [23.6, 4087.0], [23.7, 4087.0], [23.8, 4087.0], [23.9, 4087.0], [24.0, 4194.0], [24.1, 4194.0], [24.2, 4194.0], [24.3, 4194.0], [24.4, 4194.0], [24.5, 4194.0], [24.6, 4194.0], [24.7, 4194.0], [24.8, 4194.0], [24.9, 4194.0], [25.0, 4232.0], [25.1, 4232.0], [25.2, 4232.0], [25.3, 4232.0], [25.4, 4232.0], [25.5, 4232.0], [25.6, 4232.0], [25.7, 4232.0], [25.8, 4232.0], [25.9, 4232.0], [26.0, 4348.0], [26.1, 4348.0], [26.2, 4348.0], [26.3, 4348.0], [26.4, 4348.0], [26.5, 4348.0], [26.6, 4348.0], [26.7, 4348.0], [26.8, 4348.0], [26.9, 4348.0], [27.0, 4364.0], [27.1, 4364.0], [27.2, 4364.0], [27.3, 4364.0], [27.4, 4364.0], [27.5, 4364.0], [27.6, 4364.0], [27.7, 4364.0], [27.8, 4364.0], [27.9, 4364.0], [28.0, 4391.0], [28.1, 4391.0], [28.2, 4391.0], [28.3, 4391.0], [28.4, 4391.0], [28.5, 4391.0], [28.6, 4391.0], [28.7, 4391.0], [28.8, 4391.0], [28.9, 4391.0], [29.0, 4410.0], [29.1, 4410.0], [29.2, 4410.0], [29.3, 4410.0], [29.4, 4410.0], [29.5, 4410.0], [29.6, 4410.0], [29.7, 4410.0], [29.8, 4410.0], [29.9, 4410.0], [30.0, 4423.0], [30.1, 4423.0], [30.2, 4423.0], [30.3, 4423.0], [30.4, 4423.0], [30.5, 4423.0], [30.6, 4423.0], [30.7, 4423.0], [30.8, 4423.0], [30.9, 4423.0], [31.0, 4429.0], [31.1, 4429.0], [31.2, 4429.0], [31.3, 4429.0], [31.4, 4429.0], [31.5, 4429.0], [31.6, 4429.0], [31.7, 4429.0], [31.8, 4429.0], [31.9, 4429.0], [32.0, 4448.0], [32.1, 4448.0], [32.2, 4448.0], [32.3, 4448.0], [32.4, 4448.0], [32.5, 4448.0], [32.6, 4448.0], [32.7, 4448.0], [32.8, 4448.0], [32.9, 4448.0], [33.0, 4448.0], [33.1, 4448.0], [33.2, 4448.0], [33.3, 4448.0], [33.4, 4448.0], [33.5, 4448.0], [33.6, 4448.0], [33.7, 4448.0], [33.8, 4448.0], [33.9, 4448.0], [34.0, 4581.0], [34.1, 4581.0], [34.2, 4581.0], [34.3, 4581.0], [34.4, 4581.0], [34.5, 4581.0], [34.6, 4581.0], [34.7, 4581.0], [34.8, 4581.0], [34.9, 4581.0], [35.0, 4597.0], [35.1, 4597.0], [35.2, 4597.0], [35.3, 4597.0], [35.4, 4597.0], [35.5, 4597.0], [35.6, 4597.0], [35.7, 4597.0], [35.8, 4597.0], [35.9, 4597.0], [36.0, 4611.0], [36.1, 4611.0], [36.2, 4611.0], [36.3, 4611.0], [36.4, 4611.0], [36.5, 4611.0], [36.6, 4611.0], [36.7, 4611.0], [36.8, 4611.0], [36.9, 4611.0], [37.0, 4630.0], [37.1, 4630.0], [37.2, 4630.0], [37.3, 4630.0], [37.4, 4630.0], [37.5, 4630.0], [37.6, 4630.0], [37.7, 4630.0], [37.8, 4630.0], [37.9, 4630.0], [38.0, 4649.0], [38.1, 4649.0], [38.2, 4649.0], [38.3, 4649.0], [38.4, 4649.0], [38.5, 4649.0], [38.6, 4649.0], [38.7, 4649.0], [38.8, 4649.0], [38.9, 4649.0], [39.0, 4654.0], [39.1, 4654.0], [39.2, 4654.0], [39.3, 4654.0], [39.4, 4654.0], [39.5, 4654.0], [39.6, 4654.0], [39.7, 4654.0], [39.8, 4654.0], [39.9, 4654.0], [40.0, 4671.0], [40.1, 4671.0], [40.2, 4671.0], [40.3, 4671.0], [40.4, 4671.0], [40.5, 4671.0], [40.6, 4671.0], [40.7, 4671.0], [40.8, 4671.0], [40.9, 4671.0], [41.0, 4694.0], [41.1, 4694.0], [41.2, 4694.0], [41.3, 4694.0], [41.4, 4694.0], [41.5, 4694.0], [41.6, 4694.0], [41.7, 4694.0], [41.8, 4694.0], [41.9, 4694.0], [42.0, 4742.0], [42.1, 4742.0], [42.2, 4742.0], [42.3, 4742.0], [42.4, 4742.0], [42.5, 4742.0], [42.6, 4742.0], [42.7, 4742.0], [42.8, 4742.0], [42.9, 4742.0], [43.0, 4763.0], [43.1, 4763.0], [43.2, 4763.0], [43.3, 4763.0], [43.4, 4763.0], [43.5, 4763.0], [43.6, 4763.0], [43.7, 4763.0], [43.8, 4763.0], [43.9, 4763.0], [44.0, 4767.0], [44.1, 4767.0], [44.2, 4767.0], [44.3, 4767.0], [44.4, 4767.0], [44.5, 4767.0], [44.6, 4767.0], [44.7, 4767.0], [44.8, 4767.0], [44.9, 4767.0], [45.0, 4796.0], [45.1, 4796.0], [45.2, 4796.0], [45.3, 4796.0], [45.4, 4796.0], [45.5, 4796.0], [45.6, 4796.0], [45.7, 4796.0], [45.8, 4796.0], [45.9, 4796.0], [46.0, 4817.0], [46.1, 4817.0], [46.2, 4817.0], [46.3, 4817.0], [46.4, 4817.0], [46.5, 4817.0], [46.6, 4817.0], [46.7, 4817.0], [46.8, 4817.0], [46.9, 4817.0], [47.0, 4847.0], [47.1, 4847.0], [47.2, 4847.0], [47.3, 4847.0], [47.4, 4847.0], [47.5, 4847.0], [47.6, 4847.0], [47.7, 4847.0], [47.8, 4847.0], [47.9, 4847.0], [48.0, 4945.0], [48.1, 4945.0], [48.2, 4945.0], [48.3, 4945.0], [48.4, 4945.0], [48.5, 4945.0], [48.6, 4945.0], [48.7, 4945.0], [48.8, 4945.0], [48.9, 4945.0], [49.0, 4962.0], [49.1, 4962.0], [49.2, 4962.0], [49.3, 4962.0], [49.4, 4962.0], [49.5, 4962.0], [49.6, 4962.0], [49.7, 4962.0], [49.8, 4962.0], [49.9, 4962.0], [50.0, 4965.0], [50.1, 4965.0], [50.2, 4965.0], [50.3, 4965.0], [50.4, 4965.0], [50.5, 4965.0], [50.6, 4965.0], [50.7, 4965.0], [50.8, 4965.0], [50.9, 4965.0], [51.0, 5000.0], [51.1, 5000.0], [51.2, 5000.0], [51.3, 5000.0], [51.4, 5000.0], [51.5, 5000.0], [51.6, 5000.0], [51.7, 5000.0], [51.8, 5000.0], [51.9, 5000.0], [52.0, 5002.0], [52.1, 5002.0], [52.2, 5002.0], [52.3, 5002.0], [52.4, 5002.0], [52.5, 5002.0], [52.6, 5002.0], [52.7, 5002.0], [52.8, 5002.0], [52.9, 5002.0], [53.0, 5022.0], [53.1, 5022.0], [53.2, 5022.0], [53.3, 5022.0], [53.4, 5022.0], [53.5, 5022.0], [53.6, 5022.0], [53.7, 5022.0], [53.8, 5022.0], [53.9, 5022.0], [54.0, 5032.0], [54.1, 5032.0], [54.2, 5032.0], [54.3, 5032.0], [54.4, 5032.0], [54.5, 5032.0], [54.6, 5032.0], [54.7, 5032.0], [54.8, 5032.0], [54.9, 5032.0], [55.0, 5039.0], [55.1, 5039.0], [55.2, 5039.0], [55.3, 5039.0], [55.4, 5039.0], [55.5, 5039.0], [55.6, 5039.0], [55.7, 5039.0], [55.8, 5039.0], [55.9, 5039.0], [56.0, 5047.0], [56.1, 5047.0], [56.2, 5047.0], [56.3, 5047.0], [56.4, 5047.0], [56.5, 5047.0], [56.6, 5047.0], [56.7, 5047.0], [56.8, 5047.0], [56.9, 5047.0], [57.0, 5066.0], [57.1, 5066.0], [57.2, 5066.0], [57.3, 5066.0], [57.4, 5066.0], [57.5, 5066.0], [57.6, 5066.0], [57.7, 5066.0], [57.8, 5066.0], [57.9, 5066.0], [58.0, 5078.0], [58.1, 5078.0], [58.2, 5078.0], [58.3, 5078.0], [58.4, 5078.0], [58.5, 5078.0], [58.6, 5078.0], [58.7, 5078.0], [58.8, 5078.0], [58.9, 5078.0], [59.0, 5109.0], [59.1, 5109.0], [59.2, 5109.0], [59.3, 5109.0], [59.4, 5109.0], [59.5, 5109.0], [59.6, 5109.0], [59.7, 5109.0], [59.8, 5109.0], [59.9, 5109.0], [60.0, 5129.0], [60.1, 5129.0], [60.2, 5129.0], [60.3, 5129.0], [60.4, 5129.0], [60.5, 5129.0], [60.6, 5129.0], [60.7, 5129.0], [60.8, 5129.0], [60.9, 5129.0], [61.0, 5141.0], [61.1, 5141.0], [61.2, 5141.0], [61.3, 5141.0], [61.4, 5141.0], [61.5, 5141.0], [61.6, 5141.0], [61.7, 5141.0], [61.8, 5141.0], [61.9, 5141.0], [62.0, 5148.0], [62.1, 5148.0], [62.2, 5148.0], [62.3, 5148.0], [62.4, 5148.0], [62.5, 5148.0], [62.6, 5148.0], [62.7, 5148.0], [62.8, 5148.0], [62.9, 5148.0], [63.0, 5154.0], [63.1, 5154.0], [63.2, 5154.0], [63.3, 5154.0], [63.4, 5154.0], [63.5, 5154.0], [63.6, 5154.0], [63.7, 5154.0], [63.8, 5154.0], [63.9, 5154.0], [64.0, 5156.0], [64.1, 5156.0], [64.2, 5156.0], [64.3, 5156.0], [64.4, 5156.0], [64.5, 5156.0], [64.6, 5156.0], [64.7, 5156.0], [64.8, 5156.0], [64.9, 5156.0], [65.0, 5167.0], [65.1, 5167.0], [65.2, 5167.0], [65.3, 5167.0], [65.4, 5167.0], [65.5, 5167.0], [65.6, 5167.0], [65.7, 5167.0], [65.8, 5167.0], [65.9, 5167.0], [66.0, 5204.0], [66.1, 5204.0], [66.2, 5204.0], [66.3, 5204.0], [66.4, 5204.0], [66.5, 5204.0], [66.6, 5204.0], [66.7, 5204.0], [66.8, 5204.0], [66.9, 5204.0], [67.0, 5207.0], [67.1, 5207.0], [67.2, 5207.0], [67.3, 5207.0], [67.4, 5207.0], [67.5, 5207.0], [67.6, 5207.0], [67.7, 5207.0], [67.8, 5207.0], [67.9, 5207.0], [68.0, 5221.0], [68.1, 5221.0], [68.2, 5221.0], [68.3, 5221.0], [68.4, 5221.0], [68.5, 5221.0], [68.6, 5221.0], [68.7, 5221.0], [68.8, 5221.0], [68.9, 5221.0], [69.0, 5223.0], [69.1, 5223.0], [69.2, 5223.0], [69.3, 5223.0], [69.4, 5223.0], [69.5, 5223.0], [69.6, 5223.0], [69.7, 5223.0], [69.8, 5223.0], [69.9, 5223.0], [70.0, 5245.0], [70.1, 5245.0], [70.2, 5245.0], [70.3, 5245.0], [70.4, 5245.0], [70.5, 5245.0], [70.6, 5245.0], [70.7, 5245.0], [70.8, 5245.0], [70.9, 5245.0], [71.0, 5262.0], [71.1, 5262.0], [71.2, 5262.0], [71.3, 5262.0], [71.4, 5262.0], [71.5, 5262.0], [71.6, 5262.0], [71.7, 5262.0], [71.8, 5262.0], [71.9, 5262.0], [72.0, 5277.0], [72.1, 5277.0], [72.2, 5277.0], [72.3, 5277.0], [72.4, 5277.0], [72.5, 5277.0], [72.6, 5277.0], [72.7, 5277.0], [72.8, 5277.0], [72.9, 5277.0], [73.0, 5314.0], [73.1, 5314.0], [73.2, 5314.0], [73.3, 5314.0], [73.4, 5314.0], [73.5, 5314.0], [73.6, 5314.0], [73.7, 5314.0], [73.8, 5314.0], [73.9, 5314.0], [74.0, 5318.0], [74.1, 5318.0], [74.2, 5318.0], [74.3, 5318.0], [74.4, 5318.0], [74.5, 5318.0], [74.6, 5318.0], [74.7, 5318.0], [74.8, 5318.0], [74.9, 5318.0], [75.0, 5342.0], [75.1, 5342.0], [75.2, 5342.0], [75.3, 5342.0], [75.4, 5342.0], [75.5, 5342.0], [75.6, 5342.0], [75.7, 5342.0], [75.8, 5342.0], [75.9, 5342.0], [76.0, 5343.0], [76.1, 5343.0], [76.2, 5343.0], [76.3, 5343.0], [76.4, 5343.0], [76.5, 5343.0], [76.6, 5343.0], [76.7, 5343.0], [76.8, 5343.0], [76.9, 5343.0], [77.0, 5345.0], [77.1, 5345.0], [77.2, 5345.0], [77.3, 5345.0], [77.4, 5345.0], [77.5, 5345.0], [77.6, 5345.0], [77.7, 5345.0], [77.8, 5345.0], [77.9, 5345.0], [78.0, 5355.0], [78.1, 5355.0], [78.2, 5355.0], [78.3, 5355.0], [78.4, 5355.0], [78.5, 5355.0], [78.6, 5355.0], [78.7, 5355.0], [78.8, 5355.0], [78.9, 5355.0], [79.0, 5378.0], [79.1, 5378.0], [79.2, 5378.0], [79.3, 5378.0], [79.4, 5378.0], [79.5, 5378.0], [79.6, 5378.0], [79.7, 5378.0], [79.8, 5378.0], [79.9, 5378.0], [80.0, 5392.0], [80.1, 5392.0], [80.2, 5392.0], [80.3, 5392.0], [80.4, 5392.0], [80.5, 5392.0], [80.6, 5392.0], [80.7, 5392.0], [80.8, 5392.0], [80.9, 5392.0], [81.0, 5407.0], [81.1, 5407.0], [81.2, 5407.0], [81.3, 5407.0], [81.4, 5407.0], [81.5, 5407.0], [81.6, 5407.0], [81.7, 5407.0], [81.8, 5407.0], [81.9, 5407.0], [82.0, 5420.0], [82.1, 5420.0], [82.2, 5420.0], [82.3, 5420.0], [82.4, 5420.0], [82.5, 5420.0], [82.6, 5420.0], [82.7, 5420.0], [82.8, 5420.0], [82.9, 5420.0], [83.0, 5441.0], [83.1, 5441.0], [83.2, 5441.0], [83.3, 5441.0], [83.4, 5441.0], [83.5, 5441.0], [83.6, 5441.0], [83.7, 5441.0], [83.8, 5441.0], [83.9, 5441.0], [84.0, 5446.0], [84.1, 5446.0], [84.2, 5446.0], [84.3, 5446.0], [84.4, 5446.0], [84.5, 5446.0], [84.6, 5446.0], [84.7, 5446.0], [84.8, 5446.0], [84.9, 5446.0], [85.0, 5486.0], [85.1, 5486.0], [85.2, 5486.0], [85.3, 5486.0], [85.4, 5486.0], [85.5, 5486.0], [85.6, 5486.0], [85.7, 5486.0], [85.8, 5486.0], [85.9, 5486.0], [86.0, 5502.0], [86.1, 5502.0], [86.2, 5502.0], [86.3, 5502.0], [86.4, 5502.0], [86.5, 5502.0], [86.6, 5502.0], [86.7, 5502.0], [86.8, 5502.0], [86.9, 5502.0], [87.0, 5524.0], [87.1, 5524.0], [87.2, 5524.0], [87.3, 5524.0], [87.4, 5524.0], [87.5, 5524.0], [87.6, 5524.0], [87.7, 5524.0], [87.8, 5524.0], [87.9, 5524.0], [88.0, 5533.0], [88.1, 5533.0], [88.2, 5533.0], [88.3, 5533.0], [88.4, 5533.0], [88.5, 5533.0], [88.6, 5533.0], [88.7, 5533.0], [88.8, 5533.0], [88.9, 5533.0], [89.0, 5566.0], [89.1, 5566.0], [89.2, 5566.0], [89.3, 5566.0], [89.4, 5566.0], [89.5, 5566.0], [89.6, 5566.0], [89.7, 5566.0], [89.8, 5566.0], [89.9, 5566.0], [90.0, 5569.0], [90.1, 5569.0], [90.2, 5569.0], [90.3, 5569.0], [90.4, 5569.0], [90.5, 5569.0], [90.6, 5569.0], [90.7, 5569.0], [90.8, 5569.0], [90.9, 5569.0], [91.0, 5581.0], [91.1, 5581.0], [91.2, 5581.0], [91.3, 5581.0], [91.4, 5581.0], [91.5, 5581.0], [91.6, 5581.0], [91.7, 5581.0], [91.8, 5581.0], [91.9, 5581.0], [92.0, 5586.0], [92.1, 5586.0], [92.2, 5586.0], [92.3, 5586.0], [92.4, 5586.0], [92.5, 5586.0], [92.6, 5586.0], [92.7, 5586.0], [92.8, 5586.0], [92.9, 5586.0], [93.0, 5597.0], [93.1, 5597.0], [93.2, 5597.0], [93.3, 5597.0], [93.4, 5597.0], [93.5, 5597.0], [93.6, 5597.0], [93.7, 5597.0], [93.8, 5597.0], [93.9, 5597.0], [94.0, 5627.0], [94.1, 5627.0], [94.2, 5627.0], [94.3, 5627.0], [94.4, 5627.0], [94.5, 5627.0], [94.6, 5627.0], [94.7, 5627.0], [94.8, 5627.0], [94.9, 5627.0], [95.0, 5663.0], [95.1, 5663.0], [95.2, 5663.0], [95.3, 5663.0], [95.4, 5663.0], [95.5, 5663.0], [95.6, 5663.0], [95.7, 5663.0], [95.8, 5663.0], [95.9, 5663.0], [96.0, 5676.0], [96.1, 5676.0], [96.2, 5676.0], [96.3, 5676.0], [96.4, 5676.0], [96.5, 5676.0], [96.6, 5676.0], [96.7, 5676.0], [96.8, 5676.0], [96.9, 5676.0], [97.0, 5679.0], [97.1, 5679.0], [97.2, 5679.0], [97.3, 5679.0], [97.4, 5679.0], [97.5, 5679.0], [97.6, 5679.0], [97.7, 5679.0], [97.8, 5679.0], [97.9, 5679.0], [98.0, 5698.0], [98.1, 5698.0], [98.2, 5698.0], [98.3, 5698.0], [98.4, 5698.0], [98.5, 5698.0], [98.6, 5698.0], [98.7, 5698.0], [98.8, 5698.0], [98.9, 5698.0], [99.0, 5793.0], [99.1, 5793.0], [99.2, 5793.0], [99.3, 5793.0], [99.4, 5793.0], [99.5, 5793.0], [99.6, 5793.0], [99.7, 5793.0], [99.8, 5793.0], [99.9, 5793.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 2800.0, "maxY": 8.0, "series": [{"data": [[2800.0, 1.0], [3000.0, 1.0], [3200.0, 2.0], [3400.0, 2.0], [3500.0, 4.0], [3700.0, 2.0], [3600.0, 3.0], [3900.0, 6.0], [4000.0, 3.0], [4300.0, 3.0], [4200.0, 1.0], [4100.0, 1.0], [4400.0, 5.0], [4500.0, 2.0], [4600.0, 6.0], [4700.0, 4.0], [4800.0, 2.0], [4900.0, 3.0], [5000.0, 8.0], [5100.0, 7.0], [5300.0, 8.0], [5200.0, 7.0], [5400.0, 5.0], [5500.0, 8.0], [5600.0, 5.0], [5700.0, 1.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 5700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 100.0, "minX": 2.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 100.0, "series": [{"data": [], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 100.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 39.56410256410258, "minX": 1.546597356E12, "maxY": 89.5, "series": [{"data": [[1.546597358E12, 39.56410256410258], [1.546597356E12, 89.5]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.546597358E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 2889.0, "minX": 1.0, "maxY": 5793.0, "series": [{"data": [[2.0, 5793.0], [4.0, 5144.5], [5.0, 5355.0], [6.0, 5109.0], [7.0, 5566.0], [8.0, 5167.0], [10.0, 4945.0], [12.0, 5512.0], [13.0, 5017.0], [14.0, 5698.0], [15.0, 5676.0], [16.0, 5221.0], [18.0, 5414.5], [19.0, 5156.0], [22.0, 5150.5], [23.0, 5396.0], [25.0, 5604.0], [26.0, 5597.0], [27.0, 5533.0], [28.0, 5569.0], [29.0, 5502.0], [31.0, 5259.5], [32.0, 5154.0], [35.0, 5079.5], [34.0, 5524.0], [37.0, 4763.0], [36.0, 5446.0], [39.0, 5277.0], [38.0, 5245.0], [41.0, 5118.5], [43.0, 5177.5], [45.0, 5407.0], [44.0, 5318.0], [47.0, 5342.0], [46.0, 5378.0], [49.0, 4630.0], [48.0, 5000.0], [51.0, 5125.5], [53.0, 4694.0], [52.0, 5314.0], [55.0, 4654.0], [57.0, 4725.5], [56.0, 5141.0], [58.0, 4742.0], [60.0, 4596.0], [63.0, 4963.5], [62.0, 4194.0], [66.0, 4364.0], [65.0, 4423.0], [64.0, 4649.0], [71.0, 4441.5], [69.0, 4232.0], [68.0, 4759.0], [75.0, 4448.0], [74.0, 4348.0], [73.0, 4009.0], [72.0, 4064.0], [79.0, 4175.0], [78.0, 4597.0], [76.0, 4448.0], [83.0, 3472.0], [82.0, 3610.0], [81.0, 3932.0], [80.0, 4410.0], [87.0, 3740.0], [86.0, 3972.0], [85.0, 3909.0], [84.0, 3623.0], [91.0, 3909.0], [90.0, 3507.0], [89.0, 3503.0], [88.0, 3915.0], [94.0, 3263.0], [93.0, 3625.5], [99.0, 3421.0], [98.0, 3064.0], [97.0, 2889.0], [96.0, 3510.0], [101.0, 3561.0], [1.0, 5586.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[50.81, 4735.680000000001]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 101.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 1232.0, "minX": 1.546597356E12, "maxY": 7522398.0, "series": [{"data": [[1.546597358E12, 7522398.0], [1.546597356E12, 2121702.0]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.546597358E12, 4368.0], [1.546597356E12, 1232.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.546597358E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 3633.1818181818176, "minX": 1.546597356E12, "maxY": 5046.6410256410245, "series": [{"data": [[1.546597358E12, 5046.6410256410245], [1.546597356E12, 3633.1818181818176]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.546597358E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 2753.5454545454545, "minX": 1.546597356E12, "maxY": 3422.5128205128217, "series": [{"data": [[1.546597358E12, 3422.5128205128217], [1.546597356E12, 2753.5454545454545]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.546597358E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 2511.727272727273, "minX": 1.546597356E12, "maxY": 3287.3461538461547, "series": [{"data": [[1.546597358E12, 3287.3461538461547], [1.546597356E12, 2511.727272727273]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.546597358E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 2889.0, "minX": 1.546597356E12, "maxY": 5793.0, "series": [{"data": [[1.546597358E12, 5793.0], [1.546597356E12, 4410.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.546597358E12, 4009.0], [1.546597356E12, 2889.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.546597358E12, 5568.7], [1.546597356E12, 3968.1]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.546597358E12, 5792.049999999999], [1.546597356E12, 4410.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.546597358E12, 5661.2], [1.546597356E12, 4344.299999999999]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.546597358E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 4832.0, "minX": 1000.0, "maxY": 5043.0, "series": [{"data": [[1000.0, 4832.0], [2000.0, 5043.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.create();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 3253.0, "minX": 1000.0, "maxY": 3374.0, "series": [{"data": [[1000.0, 3253.0], [2000.0, 3374.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1, "maxX": 2000.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 14.0, "minX": 1.546597352E12, "maxY": 36.0, "series": [{"data": [[1.546597354E12, 14.0], [1.546597352E12, 36.0]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.546597354E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.546597356E12, "maxY": 39.0, "series": [{"data": [[1.546597358E12, 39.0], [1.546597356E12, 11.0]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 2000, "maxX": 1.546597358E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.546597356E12, "maxY": 39.0, "series": [{"data": [[1.546597358E12, 39.0], [1.546597356E12, 11.0]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.546597358E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 11.0, "minX": 1.546597356E12, "maxY": 39.0, "series": [{"data": [[1.546597358E12, 39.0], [1.546597356E12, 11.0]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 2000, "maxX": 1.546597358E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 25200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "responseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    choiceContainer.find("label").each(function(){
        this.style.color = color;
    });
}

