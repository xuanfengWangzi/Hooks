import { ref, computed } from 'vue';
import { ElMessage } from 'element-plus';
import { StorageSerializers, useStorage } from '@vueuse/core';

// 数据持久化处理
const user = useStorage('user', null, undefined, {
  serializer: StorageSerializers.object,
});

export const useUser = () => {
  const userModel = ref({
    username: '',
    password: '',
  });
  // 登录
  const login = async () => {
    user.value = { id: 1, username: userModel.value.username };
    ElMessage.success('登录成功');
  };

  const loginIng = computed(() => user.value?.id);

  // 退出登录
  const logOut = async () => {
    user.value = null;
    ElMessage.success('退出登录成功');
  };

  return { userModel, user, login, loginIng, logOut };
};
