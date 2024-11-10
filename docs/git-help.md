# Git Guide for HTTPS and SSH Access

This guide provides instructions on using HTTPS and SSH with Git for repository cloning, pushing, and managing branches. It also includes a contributor guide for collaborative development.

## GIT for HTTPS

### Git HTTPS Remote URL
```text
https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
```

### Create a New Repository on the Command Line

#### Main Branch
```bash
echo "# Crime-Reporting-Project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
git push -u origin main
```

#### Sub Branch (e.g., Pradyumna)
```bash
echo "# Crime-Reporting-Project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M Pradyumna                # Rename the branch to Pradyumna
git remote add origin https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
git push -u origin Pradyumna           # Push to the Pradyumna branch on GitHub
```

### Push an Existing Repository from the Command Line
```bash
git remote add origin https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
git branch -M main
git push -u origin main
```

## GIT for SSH

### Git SSH Remote URL
```text
git@github.com:pradyumnamahajan52/Crime-Reporting-Project.git
```

### Create a New Repository on the Command Line
```bash
echo "# Crime-Reporting-Project" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:pradyumnamahajan52/Crime-Reporting-Project.git
git push -u origin main
```

### Push an Existing Repository from the Command Line
```bash
git remote add origin git@github.com:pradyumnamahajan52/Crime-Reporting-Project.git
git branch -M main
git push -u origin main
```

## How to Clone from GitHub Branch

To clone a specific branch, use:
```bash
git clone -b Pradyumna https://github.com/pradyumnamahajan52/Crime-Reporting-Project.git
```

## How to Push Changes to a Specific Branch on GitHub

Follow these steps to push changes to a specific branch:

1. **Clone the Repository** (if you haven’t already):
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the Repository Directory**:
   ```bash
   cd <repository_name>
   ```

3. **Create or Switch to a Branch**:
   - To create a new branch:
     ```bash
     git checkout -b <branch_name>
     ```
   - To switch to an existing branch:
     ```bash
     git checkout <branch_name>
     ```

4. **Make Your Changes** (edit, add, or delete files), **Stage**, and **Commit**:
   ```bash
   git add .
   git commit -m "Your commit message here"
   ```

5. **Push to the Branch on GitHub**:
   ```bash
   git push origin <branch_name>
   ```

### Example Workflow
If you’re working on a branch called `feature-branch`:
```bash
git checkout -b feature-branch
# Make changes, then stage and commit them
git add .
git commit -m "Added new feature"
git push origin feature-branch
```

---

# Contributor Guide: Cloning, Making Changes, and Submitting Pull Requests

### 1. Clone the Repository

To start, clone the repository (defaults to the main branch):
```bash
git clone <repository_url>
cd <repository_directory>
```

To clone a specific branch:
```bash
git clone -b <branch_name> <repository_url>
```

### 2. Create and Checkout a New Branch (Recommended)

Creating a separate branch keeps the main branch clean:
```bash
git checkout -b <new_feature_branch>
```

### 3. Make Changes, Stage, and Commit

After making your changes:
```bash
git add .
git commit -m "Description of changes"
```

### 4. Push Changes to GitHub

If it’s a new branch:
```bash
git push -u origin <new_feature_branch>
```
For subsequent pushes:
```bash
git push
```

### 5. Pull Latest Changes to Keep Your Branch Up-to-Date

To update your branch with the latest main branch changes:
```bash
git pull origin main
```

### 6. Create a Pull Request (PR)

After pushing your branch, go to the GitHub repository page, locate your branch, and open a pull request. The repository owner will review, discuss, and merge the PR if approved.

---

### Summary of Commands for Contributors

1. Clone repository:
   ```bash
   git clone <repository_url>
   ```

2. Create a new branch:
   ```bash
   git checkout -b <branch_name>
   ```

3. Stage and commit changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```

4. Push changes to GitHub:
   ```bash
   git push -u origin <branch_name>
   ```

5. Pull updates from main branch (if needed):
   ```bash
   git pull origin main
   ```

6. Create a Pull Request (PR) on GitHub.

Following these steps allows contributors to collaborate efficiently without affecting the main branch.

