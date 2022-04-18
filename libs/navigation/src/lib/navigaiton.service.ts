import {Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {UserRepository} from "../../../user/src/lib/state/user.repository";

@Injectable({providedIn: 'root'})
export class NavigationService {
  constructor(private router: Router, private userRepo: UserRepository) {
  }

  navigate(url: string) {
    return this.router.navigateByUrl(url);
  }

  forgotPassword() {
    return this.router.navigateByUrl('auth/reset-password/change-password')
  }

  toTasks() {
    return this.navigate('tasks');
  }

  toLogin() {
    return this.navigate('auth/login');
  }

  toEmployees() {
    return this.navigate('employees');
  }

  toDefaultByRole() {
    const {role} = this.userRepo.getCurrentUser()!;

    if (role === 'Employee') {
      return this.toTasks();
    } else {
      return this.toEmployees();
    }
  }
}
