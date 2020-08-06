# ライブラリのインポート
from sklearn.svm import LinearSVC
from sklearn.metrics import accuracy_score

# 学習用データと結果の準備
# x,y
learn_data = [[0, 0], [1, 0], [0, 1], [1, 1]]

# x and y
learn_label = [0, 0, 0, 1]

# アルゴリズムの指定(LinearVC)
clf = LinearSVC()

