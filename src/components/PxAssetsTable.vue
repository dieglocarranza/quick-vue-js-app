<template>
  <div class="row grid-main-container">
    <b-container class="grid-content">
      <b-row>
        <b-col
          class="coin-details"
          lg="4"
          sm="12"
          v-for="a in assets"
          :key="a.id"
        >
          <div
            class="coin-content clearfix"
            :class="
              a.changePercent24Hr.includes('-')
                ? 'red-indicator'
                : 'green-indicator'
            "
          >
            <div class="image-and-ranking clearfix">
              <div class="col-lg-6 image-and-ranking--left">
                <img
                  class="coin-img"
                  :src="
                    `https://static.coincap.io/assets/icons/${a.symbol.toLowerCase()}@2x.png`
                  "
                  :alt="a.name"
                />

                <h4>
                  {{ a.name }}
                </h4>
              </div>
              <div class="col-lg-6 image-and-ranking--right">
                <h3>
                  Ranking
                </h3>

                <div class="ranking-number">
                  {{ a.rank }}
                </div>
              </div>
            </div>

            <div class="coin-info clearfix">
              <table>
                <thead>
                  <tr>
                    <th>Price</th>
                    <th>Market USD</th>
                    <th>Last / 24hs</th>
                    <td class="hidden sm:block"></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{{ a.priceUsd | dollar }}</td>
                    <td>{{ a.marketCapUsd | dollar }}</td>
                    <td
                      :class="a.changePercent24Hr.includes('-') ? 'down' : 'up'"
                    >
                      {{ a.changePercent24Hr | percent }}
                    </td>
                    <td class="hidden sm:block"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PxAssetsTable',

  props: {
    assets: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style scoped lang="scss">

@import url(https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900);
$lato: 'Lato', sans-serif;

$bg-color: #f5f5f5;
$white: #ffffff;
$dark-transparent: rgba(0, 0, 0, 0.7);
$dark: #000000;
$light-blue: #05d3ff;
$coin-detail-bg: rgb(64, 64, 89);
$red: #ff0505;
$green: #45ff05;

// Mixins
@mixin transition_effect($time, $effect) {
  -webkit-transition: all $time $effect;
  -ms-transition: all $time $effect;
  -moz-transition: all $time $effect;
  transition: all $time $effect;
}

.grid-main-container {
  background: $bg-color;
  min-height: 600px;
  margin-top: 2em;
  padding: 3em 0;

  .coin-details {
    &:hover {
      .coin-content {
        .image-and-ranking {
          .image-and-ranking--right {
            .ranking-number {
              transform: rotate(0deg);
              -moz-transform: rotate(0deg);
              -ms-transform: rotate(0deg);
              -webkit-transform: rotate(0deg);
              right: 10px;
              opacity: 0.4;
            }
          }
        }
      }
    }

    .coin-content {
      min-height: 310px;
      background: $coin-detail-bg;
      margin-bottom: 2em;
      -moz-box-shadow: 0px 1px 12px $dark;
      -webkit-box-shadow: 0px 1px 12px $dark;
      box-shadow: 0px 1px 12px $dark;
      padding: 1em;
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      border: 1px solid $coin-detail-bg;
      border-bottom: 8px solid $coin-detail-bg;

      &.red-indicator {
        border: 1px solid $red;
        border-bottom: 8px solid $red;
      }

      &.green-indicator {
        border: 1px solid $green;
        border-bottom: 8px solid $green;
      }

      .image-and-ranking {
        display: flex;
        -webkit-justify-content: space-around;
        justify-content: space-around;
        padding-bottom: 1em;
        margin-bottom: 1em;
        border-bottom: 1px solid $white;

        .image-and-ranking--left {
          img {
            display: block;
            width: 50px;
            margin: 0.5em auto;
          }

          h4 {
            font-family: $lato;
            text-align: center;
            font-weight: 300;
            color: $white;
            font-size: 13px;
          }
        }

        .image-and-ranking--right {
          position: relative;

          h3,
          .ranking-number {
            font-family: $lato;
          }

          h3 {
            color: $light-blue;
            font-size: 13px;
            text-align: center;
            position: relative;
            z-index: 2;
            top: 60px;
          }

          .ranking-number {
            font-size: 160px;
            font-weight: 700;
            z-index: 1;
            position: absolute;
            right: -17px;
            margin: 0 auto;
            color: $white;
            opacity: 0.1;
            text-align: center;
            top: -66px;
            transform: rotate(-22deg);
            -moz-transform: rotate(-22deg);
            -ms-transform: rotate(-22deg);
            -webkit-transform: rotate(-22deg);
            @include transition_effect(0.3s, ease-in-out);
          }
        }
      }

      .coin-info {
        table {
          width: 100%;
          color: $white;
          font-family: $lato;
          table-layout: fixed;
          text-align: center;
          margin-top: 3em;

          thead {
            tr {
              th {
                width: 33%;
                font-weight: 600;
                font-size: 16px;
              }
            }
          }

          tbody {
            margin-top: 1em;
            tr {
              td {
                font-size: 13px;
                font-weight: 300;
                padding-top: 1em;
              }
            }
          }
        }
      }
    }
  }
}

.up::before {
  content: '👆';
}

.down::before {
  content: '👇';
}
</style>
