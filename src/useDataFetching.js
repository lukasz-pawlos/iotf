import { ref } from 'vue';

export function useDataFetching(url) {
    const data = ref(null);
    const isLoading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
        isLoading.value = true;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Wystąpił błąd podczas pobierania danych.');
            }
            data.value = await response.json();
        } catch (e) {
            error.value = e.message;
        } finally {
            isLoading.value = false;
        }
    };

    return { data, isLoading, error, fetchData };
}
