<template>
  <div class="weather" v-if="weatherData.adCode.success">
    <span>{{ weatherData.adCode.city }}&nbsp;</span>
    <span>{{ weatherData.weather.weather }}&nbsp;</span>
    <span>{{ weatherData.weather.temperature }}℃</span>
    <span class="sm-hidden"> &nbsp;{{ weatherData.weather.winddirection }}&nbsp; </span>
    <span class="sm-hidden">{{ weatherData.weather.windpower }}</span>
  </div>
  <div class="weather" v-else>
    <span>天气数据获取失败</span>
  </div>
</template>

<script setup>
import { getOtherWeather } from "@/api";
import { Error } from "@icon-park/vue-next";
import { reactive, onMounted } from "vue";
import { ElMessage } from "element-plus";

// 天气数据
const weatherData = reactive({
  adCode: {
    success: null, //是否获取到
    message: null, //错误信息
    city: null, // 城市
  },
  weather: {
    weather: null, // 天气现象
    temperature: null, // 实时气温
    winddirection: null, // 风向描述
    windpower: null, // 风力级别
  },
});

// 提取温度字符串中的数字
const extractTemperatureNumber = (temperatureString) => {
  const numberString = temperatureString.match(/\d+/)[0];
  return Number(numberString);
};

// 取出天气平均值
const getTemperature = (min, max) => {
  try {
    // 计算平均值并四舍五入
    const average = (Number(min) + Number(max)) / 2;
    return Math.round(average);
  } catch (error) {
    console.error("计算温度出现错误：", error);
    return "NaN";
  }
};

// 获取天气数据
const getWeatherData = async () => {
  try {
    const result = await getOtherWeather();
    console.log(result);
    console.log(result.success);
    console.log(result.message);
    console.log(result.city);
    console.log(result.data.type);
    console.log(result.data.low);
    console.log(extractTemperatureNumber(result.data.low));
    console.log(result.data.high);
    console.log(extractTemperatureNumber(result.data.high));
    console.log(
      getTemperature(
        extractTemperatureNumber(result.data.low),
        extractTemperatureNumber(result.data.high),
      ),
    );
    console.log(result.data.fengxiang);
    console.log(result.data.fengli);
    weatherData.adCode = {
      city: result.city || "未知地区",
      success: result.success || false,
    };
    weatherData.weather = {
      weather: result.data.type,
      temperature: getTemperature(
        extractTemperatureNumber(result.data.low),
        extractTemperatureNumber(result.data.high),
      ),
      winddirection: result.data.fengxiang,
      windpower: result.data.fengli,
    };
  } catch (error) {
    console.error("天气信息获取失败:", error);
    onError("天气信息获取失败");
  }
};

// 报错信息
const onError = (message) => {
  ElMessage({
    message,
    icon: h(Error, {
      theme: "filled",
      fill: "#efefef",
    }),
  });
  console.error(message);
};

// 在组件挂载时获取天气数据
onMounted(() => {
  // 调用获取天气
  getWeatherData();
});
</script>
