import { CanActivateChildFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateChildFn = (route, state) => {
  const router = inject(Router);

  // قراءة بيانات المستخدم من localStorage
  const userJson = localStorage.getItem('currentUser');
  if (!userJson) {
    router.navigate(['/login']);
    return false;
  }

  const user = JSON.parse(userJson);

  // جلب الأدوار المطلوبة من data في الراوت
  const requiredRoles = route.data?.['roles'] as string[] | undefined;

  // إذا لم يتم تحديد أدوار، السماح بالوصول
  if (!requiredRoles || requiredRoles.length === 0) {
    return true;
  }

  // التحقق إذا كان الدور الحالي ضمن الأدوار المطلوبة
  if (requiredRoles.includes(user.role)) {
    return true;
  }

  // إذا لم يكن لديه الدور المناسب، توجيه لصفحة غير مصرح
  router.navigate(['/unauthorized']);
  return false;
};
