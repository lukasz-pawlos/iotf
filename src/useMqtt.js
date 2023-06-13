import { reactive, toRefs, onBeforeUnmount } from 'vue';
import mqtt from 'mqtt/dist/mqtt';

export function useMqtt() {
    const state = reactive({
        mqttData: []
    });

    let client;

    function subscribeMqttTopic(topic) {

        const URL = "ws://mqtt-dashboard.com:8000";
        const options = {
            connectTimeout: 1000,
            hostname: "mqtt-dashboard.com",
            port: 8000,
            path: "/mqtt",
        };

        client = mqtt.connect(URL,options);

        client.on('connect', () => {
            console.log('Connected to MQTT broker');
            client.subscribe(topic);
        });

        client.on('message', (topic, message) => {
            const receivedData = JSON.parse(message.toString());
            state.mqttData.push(receivedData);
        });
    }

    function publishMqttMessage(topic, payload) {
        if (client && client.connected) {
            client.publish(topic, payload);
        } else {
            console.error('MQTT client is not connected');
        }
    }

    onBeforeUnmount(() => {
        if (client) {
            client.end();
        }
    });

    return {
        ...toRefs(state),
        subscribeMqttTopic,
        publishMqttMessage
    };
}
